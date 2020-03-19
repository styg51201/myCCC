const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const upload = multer({dest: './biki/tmp-editor-imgs'});
const { v4: uuidv4 } = require('uuid');
const db = require('./db_connect')


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

//first submit editor content to draft
/*
router.post('/user-editor/draft', (req, res)=>{

    const output = {
        success: false,
        data: '',
        message: ''
    }

    let sql = 'INSERT INTO `storyDrafts`(`usrId`, `drftTitle`, `drftContent`, `drftTags`) VALUES (?, ?, ?, ?)';

    db.queryAsync(sql, [
        0, //should come from session
        req.body.title,
        JSON.stringify(req.body.content)]),
        req.body.tags
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

//auto save to draft
router.patch('/user-editor/draft/:id', (req, res)=>{

    const output = {
        success: false,
        data: '',
        message: ''
    }

    let sql = 'UPDATE `storyDrafts` SET `drftTitle`= ?,`drftContent`= ?, `drftTags`=?, `updated_at`= NOW() WHERE usrId = ? AND stryId = ?';

    db.queryAsync(sql, [
        req.body.title,
        JSON.stringify(req.body.content),
        req.body.tags,
        0, //should be from session
        req.params.id
    ])
    .then(r=>{
        output.success = true;
        output.data = r;
        output.message = 'save success!';
        res.json(output);
        return;
    })
    .catch(err=>{
        console.log(err);
        output.message = 'save fail';
        res.json(output);
        return;
    })
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
        JSON.stringify(req.body.content)]),
        req.body.tags
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


//stories page
router.get('/', (req, res)=>{
    let sql = 'SELECT `usrId`, `stryId`, `stryTitle`, `stryContent`, `stryLikes`, `created_at`, `updated_at` FROM `stories` WHERE `stryStatus`="active"';

    db.queryAsync(sql)
    .then(r=>{
        res.json(r);
    })
    .catch(err=>{
        console.log(err);
    })
})

module.exports = router;