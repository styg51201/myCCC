const express = require('express');
const router = express.Router();
// const fs = require('fs');
// const multer = require('multer');
// const upload = multer({dest: './biki/tmp-editor-imgs'});
// const { v4: uuidv4 } = require('uuid');
const db = require('./db_connect')
// const moment = require("moment-timezone");
// moment.locale('zh-tw'); //設置中文


router.get('/search', (req, res)=>{

    let key = req.query.key
    let keyarr= req.query.key.replace(/\s+/g, ' ').trim().split(' ')
    console.log(keyarr)
    let selectArr = [
        '`itemId`', 
        '`name`', 
        '`itemName`', 
        '`itemImg`', 
        '`itemDescription`', 
        '`itemPrice`', 
        '`itemCategoryId`'
    ]

    let likeStr = ``;

    keyarr.forEach((elm, idx)=>{
        selectArr.forEach((e, i)=>{
            if(idx === keyarr.length -1 && i === selectArr.length -1){
                likeStr += `${e} LIKE '%${elm}' OR ${e} LIKE '${elm}%' OR ${e} LIKE '%${elm}%'`
            }else{
                likeStr += `${e} LIKE '%${elm}' OR ${e} LIKE '${elm}%' OR ${e} LIKE '%${elm}%' OR `
            }
        })
    })

    let sql = `SELECT ${selectArr.join(' ,')} FROM \`items\` WHERE ${likeStr}`;

    //console.log(sql)

    db.queryAsync(sql)
    .then(r=>{
        res.json(r)
        // console.log(r)
    })
    .catch(err=>{
        res.json(err)
        console.log(err)
    })
})

module.exports = router;