//針對價格有重複的問題統一處理
const util = require("util");
const fs = require("fs");

// 將 fs 相關功能非同步化 (可以使用 await)
const mkdir = util.promisify(fs.mkdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// 放置爬蟲資訊的全域變數 (陣列)
var arrLink = [];
const strKeyword = "藍牙耳機";

// 從 json 檔中讀取資料
async function getData() {
  console.log("strat to read file...");
  //讀取 json 檔
  let data = JSON.parse(await readFile("output/" + strKeyword + ".json"));

  //針對每一筆資料執行迴圈
  for (let i = 0; i < data.length; i++) {
    // 針對每一筆商品的價格做確認是否有重複的問題
    const cbObj = await checkIfDoublePrice(data[i].price, i);
    data[i].price = cbObj;
  }
  //修改後的資料放入 arrLink 中，等待寫入 JSON
  arrLink = data;
}

async function checkIfDoublePrice(str, i) {
  const returnObj = {};
  //判斷如果有第二個 $ 的話則取第一個區間內的數字作為價格
  if (str.indexOf("$", 1) !== -1) {
    const strArray = str.split("$");
    const newStr = "$" + strArray[1];
    return newStr;
  } else {
    //判斷沒有第二個 $ 的話則回傳原本價格
    return str;
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
