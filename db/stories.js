const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const upload = multer({dest: './biki/tmp-editor-imgs'});
const { v4: uuidv4 } = require('uuid');
const db = require('./db_connect')

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

router.post('/submit-editor', (req, res)=>{

    const output = {
        success: false,
        data: '',
        message: ''
    }

    let sql = 'INSERT INTO `stories`(`usrId`, `stryTitle`, `stryStatus`, `stryContent`) VALUES (0, "asdf", "active", ?)';

    db.queryAsync(sql, [JSON.stringify(req.body.content)])
    .then(r=>{
        output.success = true;
        output.data = r;
        output.message = 'success!';
        res.json(output);
    })
    .catch(err=>{
        output.data = err;
        output.message = 'failed';
        res.json(output);
    })
    
})

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