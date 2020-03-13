const fs = require('fs')
const pool = require('./db_connect')
const util = require('util')
pool.query = util.promisify(pool.query)
pool.end = util.promisify(pool.end)

//將 fs 相關功能非同步化 (可以使用 await)
const mkdir = util.promisify(fs.mkdir)
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

//設定你想讀取的 table 名稱
const strKeyword = 'items'

//從資料庫取得資料
async function getDataFromDb() {
  await pool
    .query(`select * from ${strKeyword}`)
    .then(results => {
      //列出所有取得的資料
      console.log(`${JSON.stringify(results)} `)
      //將資料寫入 jsonDB 資料夾
      writeJson(results)
    })
    .catch(err => {
      console.error(err)
      console.log(`失敗原因: ${err.code}`)
      console.log(`失敗訊息: ${err.sqlMessage}`)
      console.log()
    })
}

//寫入 json 資料
async function writeJson(arrLink) {
  //建立資料夾
  if (!fs.existsSync('jsonDB')) {
    await mkdir('jsonDB', { recursive: true })
  }

  //將物件轉成 json 格存，儲存檔案，檔名設定為 '資料表名稱.json'
  await writeFile(
    'jsonDB/' + strKeyword + '.json',
    JSON.stringify(arrLink, null, 2)
  )
}

//照順序執行各個函式
async function asyncArray(functionsList) {
  for (let func of functionsList) {
    await func()
  }
}

//主程式區域
try {
  asyncArray([getDataFromDb]).then(async () => {
    console.log('Done')
  })
} catch (err) {
  console.log('try-catch: ')
  console.dir(err, { depth: null })
}
