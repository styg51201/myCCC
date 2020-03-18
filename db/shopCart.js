
const express = require('express');
const db = require(__dirname + '/db_connect');
const router = express.Router();


router.get('/shopCart', (req, res)=>{
    let sql='SELECT * from `shopcart`'
    db.queryAsync(sql)
    .then(r=>{
        return res.json(r)
    })
})

module.exports = router