//爬蟲商品資訊存成 json 檔
const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true, width: 1280, height: 800 });
const moment = require("moment");
const util = require("util");
const fs = require("fs");

// 將 fs 相關功能非同步化 (可以使用 await)
const mkdir = util.promisify(fs.mkdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// 引入 jQuery 機制
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const $ = require("jquery")(window);

//切換模式，一個是關鍵字搜尋模式，另一個是直接搜尋商品分類模式
let mode = "keyword"; // keyword or category
// 分類模式 URL
let categoryUrl = "https://tw.buy.yahoo.com/category/"; //https://tw.buy.yahoo.com/search/product';
// 關鍵字或種類名稱
let strKeyword = "運動相機周邊";
// 種類代碼
let categoryNum = "28627307";

// 放置爬蟲資訊的全域變數 (陣列)
var arrLink = [];

// 給定網頁原址, 關鍵字模式跟分類模式網址不同
let pageUrl =
  mode === "keyword" ? "https://tw.buy.yahoo.com/search/product" : categoryUrl;

// 跳頁時，給定 page 資訊，方便知道現在頁面，關鍵字模式則使用空字串即可，分類模式要輸入分類編號
let nowPage = mode === "keyword" ? "" : categoryNum;

// 瀏覽器標頭
const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
  "Accept-Language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7"
};

//進行檢索
async function searchKeyword() {
  console.log("Ready to search...");

  if (mode === "keyword") {
    // 到指定網頁後輸入關鍵字，再按下搜尋
    await nightmare
      .goto(pageUrl + nowPage, headers)
      //   .type(
      //     "div.UhSearchBox__mod___1lNSz.UhSearchBox__sas___3MwYx > input[type=search]",
      //     strKeyword
      //   ) //輸入關鍵字
      .wait(2000) //等待數秒…
      .catch(error => {
        console.error("Search failed: ", error);
      });
  } else {
    //直接前往商品分類網頁即可
    await nightmare
      .goto(pageUrl + nowPage, headers)
      .wait(2000) //等待數秒…
      .catch(error => {
        console.error("Search failed: ", error);
      });
  }
}

// 跳下一頁
async function gotoNextPage(page) {
  await nightmare
    .goto(pageUrl + page, headers) //原網址 + page 資訊, 並置入 headers
    .wait(1000) //等待數秒
    .catch(error => {
      //如果有錯誤就顯示
      console.error("Search failed: ", error);
    });
}

//滾動頁面，將動態資料逐一顯示出來
async function scrollPage() {
  console.log("Ready to scroll...");

  let currentHeight = 0; //目前的高度
  let offset = 0; //總偏移量

  //不斷地 scroll down，直到沒有辦法再往下捲動
  while (offset <= currentHeight) {
    currentHeight = await nightmare.evaluate(() => {
      return document.documentElement.scrollHeight;
    });
    offset += 500;
    await nightmare.scrollTo(offset, 0).wait(500);
  }
}

//分析、整理、收集重要資訊
async function parseHtml() {
  console.log("Ready to parse metadata/elements ...");

  // 滾動頁面到底
  await scrollPage();

  // 取得滾動後，得到動態產生結果的 html 元素
  let html = await nightmare.evaluate(() => {
    return document.documentElement.innerHTML;
  });

  //計算每頁擷取到多少商品
  let count = 0;
  // 將爬蟲資訊放到陣列中；
  $(html)
    .find(".BaseGridItem__grid___2wuJ7")
    .each((index, element) => {
      // 暫時儲放爬蟲資訊的物件
      let obj = {};
      // 每找到一個商品計算一次
      count++;

      // 將網頁元素的資訊帶入變數
      let name = $(element)
        .find(".BaseGridItem__title___2HWui")
        .text();
      let price = $(element)
        .find(".BaseGridItem__price___31jkj")
        .text();
      let herf = $(element)
        .find(".BaseGridItem__content___3LORP")
        .attr("href");

      // 將變數值帶入物件屬性當中
      obj.name = name;
      obj.price = price;
      obj.herf = herf;

      // 收集、整理各個擷取到的元素資訊，到整理資料用的陣列變數中
      arrLink.push(obj);
    });

  // 把 arrLink 寫入 json 檔案之中儲存
  await writeJson();

  //   console.log("count=" + count);

  // 找是否有下一頁的網址
  let nextPage = $(html)
    .find(".Pagination__icoArrowRight___2KprV")
    .attr("href");
  let hightlightPageBtn = $(html).find(".Pagination__highlight____eU1J");

  // 判斷是否有下一頁
  if (nextPage && nextPage != nowPage) {
    // 將 nowPage 改成 nextPage
    nowPage = nextPage;
    // 跳到下一頁
    await gotoNextPage(nextPage);
    // 執行爬蟲，取得想要的資訊
    await parseHtml();
  } else if (
    hightlightPageBtn.next().attr("class") &&
    hightlightPageBtn
      .next()
      .attr("class")
      .indexOf("Pagination__numberBtn___3HrVf") != -1
  ) {
    //針對商品較少的頁面判斷是否有 hightlightPageBtn，如果有代表仍有下一頁
    nextPage = hightlightPageBtn.next().attr("href");
    nowPage = nextPage;
    await gotoNextPage(nextPage);
    await parseHtml();
  }
}

// 取得全部商品網址後，開始針對個別商品取得更細節的規格資訊
// 從 json 檔中讀取每一頁商品網址，並且一個一個進入取得商品頁讀取詳細資訊
async function getData() {
  console.log("strat to read file...");
  //讀取 json 檔
  let data = JSON.parse(await readFile("output/" + strKeyword + ".json"));

  //針對每一筆資料執行迴圈
  for (let i = 0; i < data.length; i++) {
    // 針對每一筆商品的頁面取得關鍵資訊後，存到 data2 中
    const data2 = await parseDetail(data[i].herf);
    // console.log("data2=" + JSON.stringify(data2));
    //分別把多張商品圖片網址、商品分類資訊、商品規格寫入到 data
    arrLink[i]["pics"] = data2.pics;
    arrLink[i]["categoryString"] = data2.categoryString;
    arrLink[i]["productFeature"] = data2.productFeature;
    arrLink[i]["productSpec"] = data2.productSpec;

    //每讀取 3 個商品存檔一次，避免檔案太大做白工
    if (i % 3 === 0) {
      await writeJson();
    }
  }

  // 最後結束前再存一次，確保資料完整性
  await writeJson();
}

// 爬取商品資訊頁的詳細資料
async function parseDetail(url) {
  console.log("Ready to parse metadata/elements ...");
  // 全部商品資料存在 allData
  let allData = {};

  // 將多張商品圖片存在 picsArray 陣列
  let picsArray = [];

  //前往商品頁
  await nightmare.goto(url, headers).wait(1000);

  // 得到動態產生結果的 html 元素
  let html = await nightmare.evaluate(() => {
    return document.documentElement.innerHTML;
  });

  // [開始取得商品多張圖片] //
  // 先確定所有商品圖片數量有多少
  let totalPics = $(html).find("div.ImageHover__thumbnailList___2NTr5 > span")
    .length;
  console.log("totalPics=" + totalPics);

  // 用迴圈取得所有圖片網址
  for (let i = 1; i <= totalPics; i++) {
    // mouseover 後，取得新的 html2，才能得到正確的圖片網址
    await nightmare
      .mouseover(
        "div.ImageHover__thumbnailList___2NTr5 > span:nth-child(" + i + ")"
      )
      .wait(1000);

    // 將現在頁面 html 賦值給一個新的 html2
    let html2 = await nightmare.evaluate(() => {
      return document.documentElement.innerHTML;
    });

    // 如果 html2 裡面有 classname = .LensImage__img___1dSJa 的話，則取得 img 的 src 值
    if (
      $(html2)
        .find(".LensImage__img___1dSJa")
        .attr("src") != undefined
    ) {
      picsArray.push(
        $(html2)
          .find(".LensImage__img___1dSJa")
          .attr("src")
      );
    }
  }

  // 將圖片網址存在 allData 裡
  allData["pics"] = picsArray;

  // [開始取得商品分類文字] //
  // 儲存分類文字用的字串
  let categoryString = "";
  // 取得網頁內的分類
  let allCategoryThing = $(html).find(
    "li.CategoryBreadCrumb__breadCrumbListItem___36uwc > a"
  );

  // 針對每一個分類文字做整合，使用 '>' 隔開，最後加到 categoryString。
  allCategoryThing.each(function(index, element) {
    categoryString += $(this).text();
    if (index !== allCategoryThing.length - 1) {
      categoryString += ">";
    }
  });

  //得到最終分類字串 categoryString，存到 allData 裡
  allData["categoryString"] = categoryString;

  // [開始取得商品特色文字] //
  // 取得商品特色物件
  let productFeature = $(html).find(
    "#isoredux-root > div > div.ProductItemPage__pageWrap___3EBUN > div > div:nth-child(1) > div.ProductItemPage__infoSection___1G-NF > div.ProductItemPage__rightInfoWrap___2CN1q > div.ProductMainInfo__productSubInfo___2D_Q7 > div.ShoppingProductFeatures__productFeatureWrapper___1D0EZ li"
  );

  //創立空白陣列
  const productFeatureArray = [];

  //取得所有商品特色文字存入陣列
  for (let i = 0; i < productFeature.length; i++) {
    productFeatureArray.push(productFeature.eq(i).text());
  }

  //將商品特色文字陣列寫入 alldata 中
  allData["productFeature"] = productFeatureArray;
  //   console.log(JSON.stringify(allData));

  // [開始取得商品規格文字] //
  //必須先捲動頁面到底部
  await scrollPage();

  // 重新取得目前的 html
  html = await nightmare.evaluate(() => {
    return document.documentElement.innerHTML;
  });

  // 準備一個 productSpec，負責接收商品規格資訊
  let productSpec = {};

  // 取得網頁裡的商品資訊表格內容
  let allProductSpec = $(html).find(
    "#detail > div > div:nth-child(3) > div > table > tbody > tr"
  );

  //   console.log("allProductSpec=" + allProductSpec.length);

  //針對表格內每一個 tr 內執行，將 th 的內容設定為 key 、 td 的內容設為 value 儲存在 productSpec
  allProductSpec.each(function(index, element) {
    productSpec[
      $(this)
        .find("th")
        .text()
    ] = $(this)
      .find("td")
      .text();

    // console.log(
    //   "allProductSpecName=" +
    //     $(this)
    //       .find("th")
    //       .text()
    // );
    // console.log(
    //   "allProductSpecContent=" +
    //     $(this)
    //       .find("td")
    //       .text()
    // );
  });

  //取得最終商品規格 productSpec 存到 allData 裡
  allData["productSpec"] = productSpec;

  console.log("return allData");
  console.log(JSON.stringify(allData));
  //回傳 allData
  return allData;
}

//寫入 json 資料
async function writeJson() {
  //建立資料夾
  if (!fs.existsSync("output")) {
    await mkdir("output", { recursive: true });
  }

  //將物件轉成 json 格存，儲存檔案，檔名設定為 '關鍵字.json'
  await writeFile(
    "output/" + strKeyword + ".json",
    JSON.stringify(arrLink, null, 2)
  );
}

//關閉
async function close() {
  //因為我們已經將相關資訊儲存到資料庫，所以可以在這裡先關閉瀏覽器
  await nightmare.end(err => {
    if (err) throw err;
    console.log("Nightmare is close.");
  });
}

//照順序執行各個函式
async function asyncArray(functionsList) {
  for (let func of functionsList) {
    await func();
  }
}

//主程式區域
try {
  asyncArray([searchKeyword, parseHtml, getData, close]).then(async () => {
    console.log("Done");
  });
} catch (err) {
  console.log("try-catch: ");
  console.dir(err, { depth: null });
}
