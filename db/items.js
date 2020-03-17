const express = require('express');
const db = require(__dirname + '/db_connect');
const router = express.Router();

router.get('/watch', (req, res)=>{
    let sql='SELECT * FROM `items` WHERE `itemCategoryId`="穿戴式裝置"'
    db.queryAsync(sql)
    .then(r=>{
        return res.json(r)
    })
})
router.get('/headset', (req, res)=>{
    let sql='SELECT * FROM `items` WHERE `itemCategoryId`="耳機/喇叭"'
    db.queryAsync(sql)
    .then(r=>{
        return res.json(r)
    })
})
router.get('/actioncamera', (req, res)=>{
    let sql='SELECT * FROM `items` WHERE `itemCategoryId`="運動攝影機"'
    db.queryAsync(sql)
    .then(r=>{
        return res.json(r)
    })
})
router.get('/surrounding', (req, res)=>{
    let sql='SELECT * FROM `items` WHERE `itemCategoryId`="周邊"'
    db.queryAsync(sql)
    .then(r=>{
        return res.json(r)
    })
})
router.get('/commidty/:itemId?',(req,res)=>{
    // res.json(req.params);
    let sql='SELECT * FROM `items` WHERE `itemId` = ?'
    db.queryAsync(sql,[req.params.itemId])
    .then(r=>{
        return res.json(r)
    })
})

module.exports = router;