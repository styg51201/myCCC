const express = require('express')
const db = require(__dirname + '/db_connect')
const router = express.Router()

//呼叫購物車
router.get('/shopCart', (req, res) => {
  let sql = 'SELECT * from `shopcart`'
  db.queryAsync(sql).then(r => {
    return res.json(r)
  })
})

router.get('/orderbuyerInfo', (req, res) => {
  let sql =
    'SELECT * FROM `orderbuyer` WHERE orderId = ? ORDER BY `orderbuyer`.`created_at` DESC LIMIT 1'
  // SELECT * FROM `orderbuyer` WHERE 會員ID = ? ORDER BY `orderbuyer`.`created_at` DESC LIMIT 1
  db.queryAsync(sql).then(r => {
    return res.json(r)
  })
})

//訂單退貨
router.post('/orderBuyerInfoReturn', (req, res) => {
  const output = {
    success: false,
    data: '',
    message: '',
  }
  let sql = `UPDATE \`orderdetail\` SET \`outStatus\`='申請退貨中' WHERE \`orderId\` = ?`

  db.queryAsync(sql, [req.body.orderId])
    .then(r => {
      return res.json(r)
    })
    .catch(err => {
      output.data = err
      // console.log(err)
      res.json(output)
    })
})

//訂單成立 購買人資料
router.post('/orderBuyerInfo', (req, res) => {
  const output = {
    success: false,
    data: '',
    message: '',
  }
  let sql =
    'INSERT INTO `orderbuyer`(`orderId`, `buyerName`, `buyerMobile`,`total`, `paymentType`,`shipping`, `buyerAdress`, `invoiceType`, `taxNo`,`shipCost`,`discount`) VALUES (?,?,?,?,?,?,?,?,?,?,?)'

  db.queryAsync(sql, [
    req.body.orderId,
    req.body.buyerName,
    req.body.mobile,
    req.body.total,
    req.body.payment,
    req.body.shipping,
    req.body.buyerAdress,
    req.body.invoice,
    req.body.taxNo,
    req.body.shipCost,
    req.body.discount,
  ])
    .then(r => {
      return res.json(r)
    })
    .catch(err => {
      output.data = err
      // console.log(err)
      res.json(output)
    })
})
module.exports = router

//訂單成立 產品資訊
router.post('/orderproductInfo', (req, res) => {
  const output = {
    success: false,
    data: '',
    message: '',
  }
  let sql =
    'INSERT INTO `orderdetail`(`orderId`, `itemId`, `name`, `itemName`, `itemImg`, `itemPrice`, `itemCategoryId`, `count`, `outStatus`,`mId`) VALUES (?,?,?,?,?,?,?,?,?,?)'
  db.queryAsync(sql, [
    req.body.orderId,
    req.body.itemId,
    req.body.name,
    req.body.itemName,
    req.body.itemImg,
    req.body.itemPrice,
    req.body.itemCategoryId,
    req.body.count,
    req.body.outStatus,
    req.body.mId,
  ])
    .then(r => {
      return res.json(r)
    })
    .catch(err => {
      output.data = err
      // console.log(err)
      res.json(output)
    })
})
module.exports = router
