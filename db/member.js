const express = require('express')
const db = require(__dirname + '/db_connect')
const router = express.Router()
const multer = require('multer')

router.get('/', (req, res) => {
  let sql = 'SELECT * FROM `member`'
  db.queryAsync(sql).then(r => {
    return res.json(r)
  })
})

//抓會員的account轉json在前端比對登入帳密
router.get('/test', (req, res) => {
  // res.json(req.params)
  let sql = 'SELECT * FROM `member` WHERE `Account` = ?'
  db.queryAsync(sql, [req.query.memberaccount]).then(r => {
    return res.json(r)
  })
})

//會員註冊
router.post('/insert', (req, res) => {
  // res.json(req.params)
  const email_pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

  const output = {
    success: false,
    error: '',
    status: 0,
    body: req.body,
    result: {},
  }

  if (!req.body.username) {
    output.error = '請填寫正確的帳號'
    output.status = 410
    return res.json(output)
  }

  if (!req.body.email || !email_pattern.test(req.body.email)) {
    output.error = '請填寫合法的 email'
    output.status = 420
    return res.json(output)
  }

  //檢查欄位是否必填跟值是否正確
  const sql = `INSERT INTO \`member\`(\`Account\`, \`Pwd\`, \`Email\`) VALUES(?,?,?)`

  db.queryAsync(sql, [req.body.username, req.body.password, req.body.email])
    .then(r => {
      output.result = r
      console.log('result', r)
      output.success = true
      // res.json(req.body);
      return res.json(output)
    })
    .catch(error => {
      // res.send(error);
      console.log(error)
      return res.send(error)
    })
})

//抓指定會員的account資料轉json貼入資料編輯畫面
router.get('/:account', (req, res) => {
  // res.json(req.params)
  let sql = 'SELECT * FROM `member` WHERE `Account` = ?'
  db.queryAsync(sql, req.params.account).then(r => {
    return res.json(r)
  })
})

router.post('/update', (req, res) => {
  const sql = `UPDATE \`member\` SET \`Email\`=?,\`Pwd\`=?,\`Name\`=?,\`Gender\`=?,\`Birthday\`=?,\`PhoneNumber\`=?,\`Address\`=? WHERE Account=?`
  db.queryAsync(sql, [
    req.body.email,
    req.body.password,
    req.body.name,
    req.body.gender,
    req.body.birthday,
    req.body.phonenumber,
    req.body.address,
    req.params.account,
  ])
    .then(r => {
      output.result = r
      output.success = true
      console.log('result:', r)
      return res.json(output)
    })
    .catch(error => {
      console.log('更新錯誤:', error)
      return res.json(output)
    })
})

module.exports = router
