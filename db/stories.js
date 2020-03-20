const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const upload = multer({dest: './biki/tmp-editor-imgs'});
const { v4: uuidv4 } = require('uuid');
const db = require('./db_connect')
const moment = require("moment-timezone");
moment.locale('zh-tw'); //設置中文

//upload-images
router.post('/api/editor-imgs',upload.array('image', 12), (req, res)=>{
    // console.log("foldername: ",req.body.foldername, "typeof:", typeof req.body.foldername) //string
    const output = {
        foldername: '',
        success: false,
        url: [],
        message: ''
    }

    const foldername = req.body.foldername === '' ? uuidv4() : req.body.foldername ;

    const newpath = '../public/biki-img/editor-uploads/'+foldername;

    if(req.files){
        if(!fs.existsSync(newpath)){
            fs.mkdirSync(newpath, (err)=>{
                if(err){
                    output.msg = 'failed to make dir'
                    res.json(output)
                    return;
                }
            });
        }
        req.files.forEach(elm=>{
            fs.renameSync(elm.path, newpath + "/" + elm.originalname, error=>{
                if(error){
                    output.msg = "無法搬動檔案";
                    res.json(output);
                    return;
                }
            })
            output.url.push('/biki-img/editor-uploads/' + foldername + '/' + elm.originalname);
        })
        output.success = true;
        output.msg = "檔案上傳成功";
        output.foldername = foldername;
    }
    //最後輸出output
    res.json(output)
})

//update views of stories
router.patch('/api/view-story', (req, res)=>{
    console.log('adding view...')
    const sql = 'UPDATE `stories` SET `stryViews`= `stryViews` + 1 WHERE `stryId` = ?';

    db.queryAsync(sql, [req.query.id])
    .then(r=>{
        res.json(r);
    })
    .catch(err=>{
        res.json(err);
    })
})

/*
//first submit editor content to draft
router.post('/user-editor/draft', (req, res)=>{

    const output = {
        success: false,
        data: '',
        message: ''
    }

    let sql = 'INSERT INTO `storyDrafts`(`usrId`, `drftTitle`, `drftStatus`, `drftContent`, `drftTags`) VALUES (?,?,?,?,?)';

    db.queryAsync(sql, [
        0, //should come from session
        req.body.title,
        'active',
        JSON.stringify(req.body.content),
        JSON.stringify(req.body.tags)
    ])
    .then(r=>{
        console.log(r.insertId);
        output.success = true;
        output.data = r.insertId;
        output.message = 'draft upload success!';
        res.json(output);
    })
    .catch(err=>{
        output.data = err;
        output.message = 'draft upload failed';
        console.log(err);
        res.json(output);
    })
    
})

//auto save to draft || submit draft
router.patch('/user-editor/draft/:action/:id', (req, res)=>{
    function queryDb(sql, params, output, res, message){
        db.queryAsync(sql, params)
        .then(r=>{
            output.success = true;
            output.data = r;
            output.message = message.success;
            res.json(output);
            return;
        })
        .catch(err=>{
            console.log(err);
            output.message = message.error;
            res.json(output);
            return;
        })
    };

    (async function(req, res){

        const output = {
            success: false,
            data: '',
            message: ''
        }

        let sql, params, message;

        switch(req.params.action){
            case 'save-draft':
                sql = await 'UPDATE `storyDrafts` SET `drftTitle`= ?, `drftStatus`= ?, `drftContent`= ?, `drftTags`=?, `updated_at`= NOW() WHERE `usrId` = ? AND `drftId` = ?';
                params = await [
                    req.body.title,
                    'active',
                    JSON.stringify(req.body.content),
                    JSON.stringify(req.body.tags),
                    0, //should come from session
                    req.params.id
                ];
                message = await {
                    success: 'save success',
                    error: 'save fail'
                }
                await queryDb(sql, params, output, res, message);
                break;
            case 'submit-draft':
                sql = await 'UPDATE `storyDrafts` SET `drftStatus`= ? WHERE `usrId` = ? AND `drftId` = ?';
                params = await [
                    'submitted',
                    0, //session
                    req.params.id
                ];
                message = await {
                    success: 'update to submitted success',
                    error: 'update to submitted fail'
                }
                await queryDb(sql, params, output, res, message);
                break;
        }
    })(req, res);

})

//final submit editor content to stories
router.post('/user-editor/upload', (req, res)=>{

    const output = {
        success: false,
        data: '',
        message: ''
    }

    let sql = 'INSERT INTO `stories`(`usrId`, `stryTitle`, `stryStatus`, `stryContent`, `stryTags`) VALUES (?, ?, ?, ?, ?)';

    db.queryAsync(sql, [
        0,
        req.body.title,
        'active',
        JSON.stringify(req.body.content),
        JSON.stringify(req.body.tags)
    ])
    .then(r=>{
        console.log(r.insertId);
        output.success = true;
        output.data = r.insertId;
        output.message = 'upload success!';
        res.json(output);
    })
    .catch(err=>{
        output.data = err;
        output.message = 'upload failed';
        console.log(err);
        res.json(output);
    })
    
})

*/

router.get('/story', (req, res)=>{
    console.log('getting story...')
    // console.log(req.query);

    const output = {
        success: false,
        data: '',
        message: ''
    }
    
    let sql = 'SELECT `usrId`, `stryId`, `stryTitle`, `stryContent`, `stryLikes`, `created_at`, `updated_at` FROM `stories` WHERE `stryId`=? AND `stryStatus` = "active"';

    db.queryAsync(sql, [req.query.id])
    .then(r=>{
        output.success = true;
        output.data = r[0];
        output.message = 'got story successfully';

        res.json(output);
    })
    .catch(err=>{
        output.data = err;
        output.message = 'failed to get story';
        
        res.json(output);
    })

    // res.send(req.query);
})

//stories page
router.get('/:page?', (req, res)=>{

    let perPage = 15;
    let currentPage = req.params.page ? parseInt(req.params.page) : 1;

    const sql = 'SELECT `Name`, `Img`, `stories`.`usrId`, `stories`.`stryId`, `stryViews`, `stryTitle`, `stryContent`, `stryLikes`, `stories`.`created_at`, `stories`.`updated_at`, COUNT(`rplyId`) AS "rplyTotal" FROM `stories` INNER JOIN `member` ON `usrId` = `ID` LEFT JOIN `storyReplies` ON `storyReplies`.`stryId` = `stories`.`stryId` WHERE `stryStatus` = "active" GROUP BY `stories`.`stryId` LIMIT ' + ((currentPage - 1 ) * perPage) + ', ' + perPage;

    // const format = "YYYY"
    // console.log(sql)

    db.queryAsync(sql)
    .then(r=>{
        r.forEach((elm, idx)=>{
            r[idx].fromNow = moment(elm.updated_at).fromNow()
        })

        // console.log(r)
        res.json(r);
    })
    .catch(err=>{
        console.log(err);
    })
})

// router.get('/', (req, res)=>{
//     let sql = 'SELECT `usrId`, `stryId`, `stryTitle`, `stryContent`, `stryLikes`, `created_at`, `updated_at` FROM `stories` WHERE `stryStatus`="active"';

//     db.queryAsync(sql)
//     .then(r=>{
//         res.json(r);
//     })
//     .catch(err=>{
//         console.log(err);
//     })
// })

module.exports = router;