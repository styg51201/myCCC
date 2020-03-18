const express = require('express');
const db = require(__dirname + '/db_connect');
const moment = require('moment-timezone');
const fm = "YYYY-MM-DD";
const fm2 = "YYYYMMDDHHmmss"
const router = express.Router();
const fs = require('fs')
const multer = require('multer');
const upload = multer({ dest: 'tmp_uploads/' })


// SELECT *  ,(SELECT COUNT(*) FROM `coupon_item` WHERE `cpi_cp_id`=`cp_id`) AS `cp_getedCount` FROM `coupon` INNER JOIN `coupon_rule` ON `coupon`.`cp_rule` = `coupon_rule`.`cpr_id` WHERE `cp_id` NOT IN (SELECT `cpi_cp_id` FROM `coupon_item` WHERE `cpi_mb_id` = 6)

router.get('/',(req,res)=>{
    const sql='SELECT *  ,(SELECT COUNT(*) FROM `coupon_item` WHERE `cpi_cp_id`=`cp_id`) AS `cp_getedCount` FROM `coupon` INNER JOIN `coupon_rule` ON `coupon`.`cp_rule` = `coupon_rule`.`cpr_id` WHERE `cp_id` NOT IN (SELECT `cpi_cp_id` FROM `coupon_item` WHERE `cpi_mb_id` = 5) AND `cp_start` <= CURRENT_DATE  AND `cp_due` >= CURRENT_DATE '
    db.queryAsync(sql)
    .then(r=>{
        r.forEach(e => {
            e.cp_start = moment(e.cp_start).format(fm)
            e.cp_due = moment(e.cp_due).format(fm)
        });
        res.json(r)
    })
})
//cp_id 會員id 
router.post('/',(req,res)=>{
    const sql = 'INSERT INTO `coupon_item`( `cpi_cp_id`, `cpi_mb_id`, `cpi_use`) VALUES (?,?,0)'
    db.queryAsync(sql,[req.body.cp_id,req.body.mb_id])
    .then(r=>{
        res.json(r)
    })

})

router.post('/memberCoupon',(req,res)=>{
    const sql = 'SELECT * FROM `coupon_item` INNER JOIN `coupon` ON `cpi_cp_id` = `cp_id` INNER JOIN `coupon_rule` ON `cp_rule` = `cpr_id` WHERE cpi_mb_id = ?'
    db.queryAsync(sql,[req.body.mb_id])
    .then(r=>{
        r.forEach(e => {
            e.cp_start = moment(e.cp_start).format(fm)
            e.cp_due = moment(e.cp_due).format(fm)
            e.cpi_useDate = moment(e.cpi_useDate).format(fm)
        });
        res.json(r)
    })
})


//新增優惠券
router.post('/addCoupon', upload.single('cp_img'), (req, res) => {

    console.log(req.file)
    console.log(req.body)
    
    //設定規則

    let rule_num = null
    let discount_num  = null

    switch (req.body.rule){
        case '0':
            rule_num = 0
            break
        case '1':
             rule_num = req.body.rule_pic_num
            break
        case '2':
            rule_num = req.body.rule_cash_num
            break    
    }

    switch (req.body.discount){
        case '0':
            discount_num = req.body.discount_p_num
            break
        case '1':
            discount_num = req.body.discount_cash_num
            break
    }

    

    const sqlForCoupon ='INSERT INTO `coupon` (`cp_vid`,`cp_vendor`,`cp_count`, `cp_start`, `cp_due`, `cp_img`, `cp_rule`) VALUES (?,?,?,?,?,?,?)'

    const arrForCoupon = [req.body.v_id,
                        req.body.v_name,
                        req.body.count,
                        req.body.start,
                        req.body.due
                    ]

    const sqlForRule = 'INSERT INTO `coupon_rule`( `cpr_object`, `cpr_rule`, `cpr_ruleNum`, `cpr_discount`, `cpr_discountNum`) VALUES (?,?,?,?,?)'

    const arrForRule = [req.body.object,
                        req.body.rule,
                        rule_num,
                        req.body.discount,
                        discount_num
                    ]


    const output = {
        success: false,
        url: '',
        msg: '沒有上傳檔案',
    };

    //確認上傳檔案 跟 上傳檔案原始名 是否存在
    if (req.file && req.file.originalname) {


        switch (req.file.mimetype) { //mimetype=>檔案類型
            case 'image/jpeg':
            case 'image/png':
            case 'image/gif':

                //設定檔名及副檔名
                const extName = req.file.originalname.split('.')
                const imgName = moment(new Date()).format(fm2) + '.' + extName[extName.length -1]

                arrForCoupon.push(imgName)

                //fs裡的rename方法=>搬移檔案 及 更改檔案名
                fs.rename(req.file.path, '../public/sty-img/' + imgName, error => {
                    //有誤的話
                    if (error) {
                        output.success = false;
                        output.msg = '無法搬動檔案';
                    } else {
                        //寫進資料庫
                        db.queryAsync(sqlForRule,arrForRule)
                        .then(r=>{
                            arrForCoupon.push(r.insertId)
                            db.queryAsync(sqlForCoupon,arrForCoupon)
                            .then(r=>{
                                if(r.affectedRows>0){
                                    output.success = true;
                                }
                            })
                        })
                    }
                    res.json(output);
                });
                break;
            default:
                //fs.unlink => 刪除暫存的圖片
                fs.unlink(req.file.path, error => {
                    output.msg = '不接受式這種檔案格';
                    res.json(output);
                });
        }
    } else {
        res.json(output);
    }
})




module.exports = router