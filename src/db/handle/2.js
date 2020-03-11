//使用 axios 來下載商品圖片
var fs = require("fs"),
  request = require("request");
const util = require("util");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const axios = require("axios");

const download_image = (url, image_path) =>
  axios({
    url,
    responseType: "stream"
  }).then(
    response =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(image_path))
          .on("finish", () => resolve())
          .on("error", e => reject(e));
      })
  );

let strKeyword = "藍牙耳機";
async function getData() {
  console.log("strat to read file...");
  //讀取 json 檔
  let data = JSON.parse(
    await readFile("../jsonProducts/" + strKeyword + ".json")
  );

  //針對每一筆資料執行迴圈
  for (let i = 0; i < data.length; i++) {
    console.log("downloading... i=", i);
    var rootDir = "./img";
    if (!fs.existsSync(rootDir)) fs.mkdirSync(rootDir);

    const keywordFolderName = "./img/" + strKeyword;
    if (!fs.existsSync(keywordFolderName)) fs.mkdirSync(keywordFolderName);

    var picsDir = "./img/" + strKeyword + "/" + data[i].name.replace(/\//g, "");
    if (!fs.existsSync(picsDir)) fs.mkdirSync(picsDir);

    // 針對每一筆商品的頁面取得關鍵資訊後，存到 data2 中
    for (let picNum = 0; picNum < data[i].pics.length; picNum++) {
      console.log("圖片： picNum=", picNum, ", i=", i);
      const uri = data[i].pics[picNum];
      const filename =
        "img/" +
        strKeyword +
        "/" +
        data[i].name.replace(/\//g, "") +
        "/" +
        picNum +
        ".jpg";
      await download_image(uri, filename);
    }
  }
}

getData();
