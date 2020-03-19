const express = require('express')
const db = require(__dirname + '/db_connect')
const router = express.Router()

router.get('/shopCart', (req, res) => {
  let sql = 'SELECT * from `shopcart`'
  db.queryAsync(sql).then(r => {
    return res.json(r)
  })
})

router.post('/orderBuyerInfo', (req, res) => {
  console.log('123123', req.body.orderId)
  const output = {
    success: false,
    data: '',
    message: '',
  }
  let sql =
    'INSERT INTO `orderbuyer`(`orderId`, `buyerName`, `buyerMobile`, `buyerAdress`, `invoiceType`, `taxNo`, `paymentType`) VALUES (?,?,?,?,?,?,?)'

  db.queryAsync(sql, [
    req.body.orderId,
    req.body.buyer_name,
    req.body.buyerAdress,
    req.body.mobile,
    req.body.shipping,
    req.body.payment,
    req.body.invoice,
    req.body.taxNo,
  ])
    .then(r => {
      console.log('rrrrr', r)
      return res.json(r)
    })
    .catch(err => {
      output.data = err
      console.log(err)
      res.json(output)
    })
})
module.exports = router
