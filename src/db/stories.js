const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const upload = multer({dest: '../biki/tmp-editor-imgs'});
const { v4: uuidv4 } = require('uuid');

router.post('/api/editor-imgs',upload.array('image', 12), (req, res)=>{
    const output = {
        foldername: '',
        success: false,
        url: '',
        message: ''
    }
    // console.log(req.files)
    // console.log("foldername: ",req.body.foldername, "typeof:", typeof req.body.foldername) //string

    const foldername = req.body.foldername === '' ? uuidv4() : req.body.foldername ;

    output.message = 'temp img upload success'
    output.foldername = foldername;``
    res.json(output)``
})

router.post('/submit-editor', (req, res)=>{

})

module.exports = router;