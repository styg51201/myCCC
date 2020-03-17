const express = require('express');
const db = require(__dirname + '/db_connect');
const moment = require('moment-timezone');
const fm = "YYYY-MM-DD";
const router = express.Router();


// SELECT *  ,(SELECT COUNT(*) FROM `coupon_item` WHERE `cpi_cp_id`=`cp_id`) AS `cp_getedCount` FROM `coupon` INNER JOIN `coupon_rule` ON `coupon`.`cp_rule` = `coupon_rule`.`cpr_id` WHERE `cp_id` NOT IN (SELECT `cpi_cp_id` FROM `coupon_item` WHERE `cpi_mb_id` = 6)

router.get('/',(req,res)=>{
    const sql='SELECT *  ,(SELECT COUNT(*) FROM `coupon_item` WHERE `cpi_cp_id`=`cp_id`) AS `cp_getedCount` FROM `coupon` INNER JOIN `coupon_rule` ON `coupon`.`cp_rule` = `coupon_rule`.`cpr_id` WHERE `cp_id` NOT IN (SELECT `cpi_cp_id` FROM `coupon_item` WHERE `cpi_mb_id` = 5)'
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
    console.log(req.body)
    const sql = 'INSERT INTO `coupon_item`( `cpi_cp_id`, `cpi_mb_id`, `cpi_use`) VALUES (?,?,0)'
    db.queryAsync(sql,[req.body.cp_id,req.body.mb_id])
    .then(r=>{
        res.json(r)
    })

})

module.exports = router