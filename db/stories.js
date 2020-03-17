const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const upload = multer({dest: './src/biki/tmp-editor-imgs'});
const { v4: uuidv4 } = require('uuid');

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

})

module.exports = router;