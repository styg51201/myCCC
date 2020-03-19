const express = require('express')
const db = require(__dirname + '/db_connect')
const router = express.Router()

router.get('/', (req, res) => {
  let sql = 'SELECT * FROM `member`'
  db.queryAsync(sql).then(r => {
    return res.json(r)
  })
})

//抓會員的account轉json
router.get('/:memberaccount?', (req, res) => {
  // res.json(req.params)
  let sql = 'SELECT * FROM `member` WHERE `Account` = ?'
  db.queryAsync(sql, [req.params.memberaccount]).then(r => {
    return res.json(r)
  })
})

//抓會員的account資料轉json貼入資料編輯畫面
router.get('/edit/:memberaccount?', (req, res) => {
  // res.json(req.params)
  let sql = 'SELECT * FROM `member` WHERE `Account` = ?'
  db.queryAsync(sql, [req.params.memberaccount]).then(r => {
    return res.json(r)
  })
})

module.exports = router
