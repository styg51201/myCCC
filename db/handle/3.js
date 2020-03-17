//針對產品名稱有括號的問題統一處理

// 將 fs 相關功能非同步化 (可以使用 await)
const util = require("util");
const fs = require("fs");
const mkdir = util.promisify(fs.mkdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// 放置爬蟲資訊的全域變數 (陣列)
var arrLink = [];
const strKeyword = "藍牙耳機";

// 取得全部商品網址後，開始針對個別商品取得更細節的規格資訊
// 從 json 檔中讀取每一頁商品網址，並且一個一個進入取得商品頁讀取詳細資訊
async function getData() {
  console.log("strat to read file...");
  //讀取 json 檔
  let data = JSON.parse(await readFile("output/" + strKeyword + ".json"));

  //針對每一筆資料執行迴圈
  for (let i = 0; i < data.length; i++) {
    // 使用 isEnd 針對可能名稱有多組括號做判定是否已結束
    let isEnd = false;
    while (!isEnd) {
      // 使用 checkIfBrackets 函式回傳一個 Obj 來判斷是否仍有括號
      const cbObj = await checkIfBrackets(data[i].name);
      data[i].name = cbObj.str;
      isEnd = cbObj.isEnd;
    }
  }
  //將修改後資料放入 arrLink 等待寫入 JSON
  arrLink = data;
}

async function checkIfBrackets(str) {
  const returnObj = {};
  if (str.indexOf("(") !== -1) {
    const position1 = str.indexOf("(");
    const position2 =
      str.indexOf(")") !== -1 ? str.indexOf(")") : str.indexOf("）");
    if (position1 === 0) {
      // "()在開頭"
      str = str.substring(position2 + 1, str.length);
    } else if (position2 === str.length - 1) {
      // "()在結尾"
      str = str.substring(0, position1);
    } else {
      // "()在別的地方"
      str =
        str.substring(0, position1) + str.substring(position2 + 1, str.length);
    }

    returnObj.str = str;
    returnObj.isEnd = false;
    return returnObj;
  } else if (str.indexOf("[") !== -1) {
    const position1 = str.indexOf("[");
    const position2 = str.indexOf("]");
    if (position1 === 0) {
      //  "[在開頭"
      str = str.substring(position2 + 1, str.length);
    } else if (position2 === str.length - 1) {
      // "]在結尾"
      str = str.substring(0, position1);
    } else {
      // "[]在別的地方"
      str =
        str.substring(0, position1) + str.substring(position2 + 1, str.length);
    }
    returnObj.str = str;
    returnObj.isEnd = false;
    return returnObj;
  } else if (str.indexOf("【") !== -1) {
    const position1 = str.indexOf("【");
    const position2 = str.indexOf("】");
    if (position1 === 0) {
      //"【在開頭"
      str = str.substring(position2 + 1, str.length);
    } else if (position2 === str.length - 1) {
      //"】在結尾"
      str = str.substring(0, position1);
    } else {
      //"【】在別的地方"
      str =
        str.substring(0, position1) + str.substring(position2 + 1, str.length);
    }
    returnObj.str = str;
    returnObj.isEnd = false;
    return returnObj;
  } else {
    // "沒有任何括號了"
    returnObj.str = str;
    returnObj.isEnd = true;
    return returnObj;
  }
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

//照順序執行各個函式
async function asyncArray(functionsList) {
  for (let func of functionsList) {
    await func();
  }
}

//主程式區域
try {
  asyncArray([getData, writeJson]).then(async () => {
    console.log("Done");
  });
} catch (err) {
  console.log("try-catch: ");
  console.dir(err, { depth: null });
}
