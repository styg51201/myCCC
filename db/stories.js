const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const upload = multer({dest: './biki/tmp-editor-imgs'});
const { v4: uuidv4 } = require('uuid');
const db = require('./db_connect')
const moment = require("moment-timezone");
moment.locale('zh-tw'); //設置中文


//-------MEMBER--------

//---
//get story / draft
router.get('/member/story/:id', (req, res)=>{
    let usrId = req.query.usrId
    let id = req.params.id;
    let sql = `SELECT \`usrId\`, \`stryId\`, \`stryTitle\`, \`stryTags\`, \`stryContent\`, \`updated_at\`
        FROM \`stories\` 
        WHERE \`stryId\`=? AND \`usrId\` = ?`;

    if(usrId === 'null') return;
    
    db.queryAsync(sql, [id, usrId]) //should come from session
    .then(r=>{
        res.json(r[0])
    })
    .catch(err=>{
        console.log(err)
    })
})
router.get('/member/draft/:id', (req, res)=>{
    let usrId = req.query.usrId
    let id = req.params.id;
    let sql = `SELECT \`drftId\`, \`drftTitle\`, \`drftContent\`, \`drftTags\`, \`updated_at\` 
        FROM \`storydrafts\` 
        WHERE \`drftId\` = ? AND \`usrId\` = ?`;
    
    db.queryAsync(sql, [id, usrId]) //should come from session
    .then(r=>{
        res.json(r[0])
    })
    .catch(err=>{
        console.log(err)
    })
})

//---
//get stories / drafts
router.get('/member/stories', (req, res)=>{

    let usrId = req.query.usrId
    // console.log(req.query)

    if(usrId === 'null') return;
    // return;

    let sql = `
    SELECT \`s\`.\`stryId\`, \`stryTitle\`, \`stryStatus\`, \`stryContent\`, \`stryTags\`, \`stryViews\`, \`s\`.\`updated_at\`,
        COUNT(\`rplyId\`) AS \`rplyTotal\`,
        COALESCE(sLikes, 0) AS likes
        FROM \`stories\` AS \`s\`
        LEFT JOIN \`storyReplies\` AS \`r\` ON \`r\`.\`stryId\` = \`s\`.\`stryId\`
        LEFT JOIN 
            (SELECT \`storyLikes\`.\`stryId\`, COUNT(\`storyLikes\`.\`stryId\`) AS sLikes FROM \`storyLikes\` GROUP BY \`storyLikes\`.\`stryId\`) AS story_likes
        ON \`s\`.\`stryId\` = story_likes.\`stryId\`
        WHERE \`s\`.\`usrId\` = ?
        GROUP BY \`s\`.\`stryId\`
        ORDER BY \`s\`.\`updated_at\` DESC`;

    db.queryAsync(sql, [usrId]) //should come from session
    .then(r=>{
        r.forEach(elm=>{
            elm.time = moment(elm.updated_at).format("YYYY-MM-DD")
        })
        res.json(r)
    })
    .catch(err=>{
        res.json(err)
    })
})
router.get('/member/drafts', (req, res)=>{

    let usrId = req.query.usrId
    // console.log(req.query)

    if(usrId === 'null') return;

    // return;

    let sql = 'SELECT `drftId`, `drftTitle`, `drftContent`, `drftTags`, `updated_at` FROM `storyDrafts` WHERE `usrId` = ? AND `drftStatus` = "active" ORDER BY `updated_at` DESC';

    db.queryAsync(sql, [usrId]) //should come from session
    .then(r=>{
        r.forEach(elm=>{
            elm.time = moment(elm.updated_at).format("YYYY-MM-DD")
        })
        res.json(r)
    })
    .catch(err=>{
        res.json(err)
    })
})

//get story user like
router.get('/member/like/:id?', (req, res)=>{

    let usrId = req.query.usrId;
    if(usrId === 'null') return;
    let params= [usrId];

    let sql = 'SELECT `stryId` FROM `storyLikes` WHERE `usrId` = ?'
    
    if(req.params.id){
        sql += ' AND `stryId` = ?'
        params.push(req.params.id)
    }

    db.queryAsync(sql, params)
    .then(r=>{
        // console.log(r)
        res.json(r)
    })
    .catch(err=>{
        throw err;
    })
})

//get story replies
router.get('/member/:id/replies', (req, res)=>{

    //console.log('id:', req.params.id)

    let id = req.params.id

    let sql = `SELECT \`rplyId\`, \`usrId\`, \`rplyTo\`, \`rplyContent\`, \`rplyStatus\`, \`storyReplies\`.\`updated_at\`,
    \`Id\`, \`Name\`, \`Img\`, \`Account\`
    FROM \`storyReplies\` 
    INNER JOIN \`member\` ON \`usrId\` = \`Id\`
    WHERE \`stryId\` = ?
    ORDER BY \`storyReplies\`.\`updated_at\` DESC`;

    //AND \`usrId\` != ?

    db.queryAsync(sql, [id])
    .then(r=>{
        // console.log(r)
        r.forEach((elm)=>{
            elm.fromNow = moment(elm.updated_at).fromNow()
        })
        res.json(r)
    })
    .catch(err=>{
        throw err
    })
})

//hide / show story
router.patch('/member/story/hide-story/:id', (req, res)=>{
    let id = req.params.id
    let usrId = req.query.usrId

    if(usrId === 'null') return;

    let sql = 'UPDATE `stories` SET `stryStatus`="hidden" WHERE `stryId`=? AND `usrId`=?';

    db.queryAsync(sql, [id, usrId])
    .then(r=>{
        res.json(r)
    })
    .catch(err=>{
        throw err
    })
})
router.patch('/member/story/show-story/:id', (req, res)=>{
    let id = req.params.id
    let usrId = req.query.usrId

    let sql = 'UPDATE `stories` SET `stryStatus`="active" WHERE `stryId`=? AND `usrId`=?';

    db.queryAsync(sql, [id, usrId])
    .then(r=>{
        res.json(r)
    })
    .catch(err=>{
        throw err
    })
})

//---
//update story
router.patch('/member/story/:id', (req, res)=>{

    let usrId = req.query.usrId
    let id = req.params.id;
    // console.log(id)

    if(usrId === 'null') return;
    
    let sql = `UPDATE \`stories\` 
        SET \`stryTitle\`=?,\`stryContent\`=? ,\`stryTags\`=? , \`updated_at\`= NOW() 
        WHERE \`stryId\`= ? AND \`usrId\`=?`;

    db.queryAsync(sql, [
        req.body.title,
        JSON.stringify(req.body.content),
        JSON.stringify(req.body.tags),
        id,
        usrId
    ])
    .then(r=>{
        res.json(r)
        // console.log(r)
    })
})


//---
//save to draft
router.patch('/member/draft/save-draft/:id', (req, res)=>{

    let action = req.params.action
    let usrId = req.query.usrId
    let id = req.params.id

    if(usrId === 'null') return;

    const output = {
        success: false,
        data: '',
        message: ''
    }

    let sql = 'UPDATE `storyDrafts` SET `drftTitle`= ?, `drftStatus`= ?, `drftContent`= ?, `drftTags`=?, `updated_at`= NOW() WHERE `usrId` = ? AND `drftId` = ?';

    // console.log(req.body)
    // return;
    let params = [
        req.body.title,
        'active',
        JSON.stringify(req.body.content),
        JSON.stringify(req.body.tags),
        usrId,
        id
    ];

    db.queryAsync(sql, params)
    .then(r=>{
        output.success = true;
        output.data = r;
        output.message = 'save success';
        res.json(output);
        // console.log(output)
        return;
    })
    .catch(err=>{
        console.log(err);
        output.message = 'save fail';
        res.json(output);
        return;
    })

})
//submit-draft
router.patch('/member/draft/submit-draft/:id', (req, res)=>{

    let usrId = req.query.usrId
    let id = req.params.id

    if(usrId === 'null') return;

    const output = {
        success: false,
        data: '',
        message: ''
    }

    let sql = 'UPDATE `storyDrafts` SET `drftStatus`= ? WHERE `usrId` = ? AND `drftId` = ?';
    let params = [
            'submitted',
            usrId,
            id
        ];

    db.queryAsync(sql, params)
    .then(r=>{
        output.success = true;
        output.data = r;
        output.message = 'update to submitted success';
        res.json(output);
        // console.log(output)
        return;
    })
    .catch(err=>{
        console.log(err);
        output.message = 'update to submitted fail';
        res.json(output);
        return;
    })

})


//---
//first submit editor content to draft
router.post('/member/initiate-draft', (req, res)=>{
    console.log('initiating draft...')
    
    const output = {
        success: false,
        data: '',
        message: ''
    }

    let usrId = req.query.usrId

    if(usrId === 'null') return;

    let sql = 'INSERT INTO `storyDrafts`(`usrId`, `drftTitle`, `drftStatus`, `drftContent`, `drftTags`) VALUES (?,?,?,?,?)';

    db.queryAsync(sql, [
        usrId,
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

//final submit editor content to stories
router.post('/member/upload', (req, res)=>{

    const output = {
        success: false,
        data: '',
        message: ''
    }

    let usrId = req.query.usrId;

    if(usrId === 'null') return;

    let sql = 'INSERT INTO `stories`(`usrId`, `stryTitle`, `stryStatus`, `stryContent`, `stryTags`) VALUES (?, ?, ?, ?, ?)';

    db.queryAsync(sql, [
        usrId,
        req.body.title,
        'active',
        JSON.stringify(req.body.content),
        JSON.stringify(req.body.tags)
    ])
    .then(r=>{
        // console.log(r.insertId);
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

//submit reply
router.post('/reply/:id', (req, res)=>{
    console.log('submitting reply...')
    let rplyToId = req.query.toId || null;
    let usrId = req.query.usrId;

    if(usrId === 'null') return;

    let stryId = req.params.id;
    let content = req.body.content;

    console.log('stryId:', stryId)

    if(content.trim() === ''){
        res.json('no content')
        return;
    }
    
    let replyToId = req.query;
    let sql = `INSERT INTO \`storyReplies\`(\`stryId\`, \`usrId\`, \`rplyTo\`, \`rplyContent\`, \`rplyStatus\`) 
                VALUES (?, ?, ?, ?, ?)`;

    db.queryAsync(sql, [
        stryId,
        usrId,
        rplyToId,
        content,
        'active'
    ])
    .then(r=>{
        console.log('added reply!')
        res.json(r)
    })
    .catch(err=>{
        console.log('failed to reply')
        res.json(err)
    })
})

//user add like to story
router.post('/member/add-like/:id', (req, res)=>{
    let id = req.params.id;
    let usrId = req.query.usrId;
    if(usrId === 'null') return;

    let sql = 'INSERT INTO `storyLikes`(`stryId`, `usrId`) VALUES (?, ?)'

    db.queryAsync(sql, [id, usrId])
    .then(r=>{
        res.json(r)
    })
    .catch(err=>{
        throw err
    })
})


//remove like from story
router.delete('/member/remove-like/:id', (req, res)=>{
    let id = req.params.id;
    let usrId = req.query.usrId;
    if(usrId === 'null') return;

    let sql = 'DELETE FROM `storyLikes` WHERE `stryId`= ? AND `usrId`= ?'

    db.queryAsync(sql, [id, usrId])
    .then(r=>{
        res.json(r)
    })
    .catch(err=>{
        throw err
    })
})

//---
//delete draft
router.delete('/member/draft/:id', (req, res)=>{
    let sql = 'DELETE FROM `storydrafts` WHERE `usrId` = ? AND `drftId` = ?';

    let id = req.params.id;
    let usrId = req.query.usrId;

    if(usrId === 'null') return;

    console.log(id, usrId)

    db.queryAsync(sql, [usrId, id])
    .then(r=>{
        res.json(r)
    })
    .catch(err=>{
        console.log(err)
        res.json(err)
    })
})
//delete story
router.delete('/member/story/:id', (req, res)=>{
    let sql = 'DELETE FROM `stories` WHERE `usrId` =? AND `stryId` =?';

    let id = req.params.id
    let usrId = req.query.usrId
    console.log(id, usrId)

    db.queryAsync(sql, [usrId, id])
    .then(r=>{
        res.json(r)
    })
    .catch(err=>{
        console.log(err)
        res.json(err)
    })
})


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


//-------PUBLIC PAGES--------

//update views of stories
router.patch('/api/view-story/:id', (req, res)=>{
    console.log('adding view...')
    const sql = 'UPDATE `stories` SET `stryViews`= `stryViews` + 1 WHERE `stryId` = ?';

    db.queryAsync(sql, [req.params.id])
    .then(r=>{
        res.json(r);
    })
    .catch(err=>{
        res.json(err);
    })
})

//get replies to story
router.get('/story/replies/:id', (req, res)=>{
    // console.log(req.query)

    console.log("getting replies to story...")
    let stryId = req.params.id
    let rplyId = req.query.rplyId
    let params;
    let sql;

    if(rplyId){
        sql = `SELECT \`rplyId\`, \`usrId\`, \`rplyTo\`, \`rplyContent\`, \`rplyStatus\`, \`storyReplies\`.\`updated_at\` ,
        \`Img\`, \`Name\`, \`Account\`
        FROM \`storyReplies\` 
        INNER JOIN \`member\` ON \`Id\` = \`usrId\`
        WHERE \`stryId\` = ? AND \`rplyId\` = ?`;
        
        params = [stryId, rplyId]
    }else{
        sql = `SELECT \`rplyId\`, \`usrId\`, \`rplyTo\`, \`rplyContent\`, \`rplyStatus\`, \`storyReplies\`.\`updated_at\` ,
        \`Img\`, \`Name\`, \`Account\`
        FROM \`storyReplies\` 
        INNER JOIN \`member\` ON \`Id\` = \`usrId\`
        WHERE \`stryId\` = ?`;
        params = [stryId]
    }

    db.queryAsync(sql, params)
    .then(r=>{
        r.forEach((elm)=>{
            elm.fromNow = moment(elm.updated_at).fromNow()
        })
        res.json(r)
        // console.log(r)
    })
})

//get story
router.get('/story/:id', (req, res)=>{
    console.log('getting story...')
    // console.log(req.query);

    const output = {
        success: false,
        data: '',
        message: ''
    }
    
    let sql = `
    SELECT \`stories\`.\`usrId\`, \`stories\`.\`stryId\`, \`stryTags\`, \`stryTitle\`, \`stryContent\`, \`stories\`.\`updated_at\`,
    \`Img\`, \`Name\`, \`Account\`,
    COUNT (\`storyLikes\`.\`stryId\`) AS likes
    FROM \`stories\` 
    INNER JOIN \`member\` ON \`Id\` = \`stories\`.\`usrId\`
    LEFT JOIN \`storyLikes\` ON \`storyLikes\`.\`stryId\` = \`stories\`.\`stryId\`
    WHERE \`stories\`.\`stryId\`=? AND \`stryStatus\` = "active"
    GROUP BY \`stories\`.\`stryId\``;

    db.queryAsync(sql, [req.params.id])
    .then(r=>{
        // console.log(r);
        r.forEach((elm)=>{
            // elm.stryFromNow = moment(elm.updated_at).fromNow()
            elm.updated_at = moment(elm.updated_at).format('LL')
        })
        output.success = true;
        output.data = r;
        output.message = 'got story successfully';

        res.json(output);
    })
    .catch(err=>{
        output.data = err;
        output.message = 'failed to get story';
        
        res.json(output);
    })
})

//stories page
router.get('/:page?', (req, res)=>{

    let perPage = 15;
    let currentPage = req.params.page ? parseInt(req.params.page) : 1;

    let sql = `SELECT \`Name\`, \`Img\`, \`Account\`, \`stories\`.\`usrId\`, \`stories\`.\`stryId\`, \`stryViews\`, \`stryTitle\`, \`stryContent\`, \`stryTags\`, \`stories\`.\`created_at\`, \`stories\`.\`updated_at\`, 
    COUNT(\`rplyId\`) AS rplyTotal,
    COALESCE(sLikes, 0) AS likes
    FROM \`stories\` 
    INNER JOIN \`member\` ON \`usrId\` = \`ID\` 
    LEFT JOIN \`storyReplies\` ON \`storyReplies\`.\`stryId\` = \`stories\`.\`stryId\` 
    LEFT JOIN 
        (SELECT \`storyLikes\`.\`stryId\`, COUNT(\`storyLikes\`.\`stryId\`) AS sLikes FROM \`storyLikes\` GROUP BY \`storyLikes\`.\`stryId\`) AS story_likes
    ON \`stories\`.\`stryId\` = story_likes.\`stryId\`
    WHERE \`stryStatus\` = "active"`;

    //如果有搜尋
    if(req.query.key){
        let searchArr = req.query.key.replace(/\s+/g, ' ').trim().split(' ')
        let likeArr = [
            '`stryTItle`',
            '`stryContent`',
            '`stryTags`'
        ]
        let likeStr = '';
        
        searchArr.forEach((elm, idx)=>{
            likeStr += ` AND (`
            likeArr.forEach((e, i)=>{
                likeStr += `${e} LIKE '%${elm}' OR ${e} LIKE '%${elm}%' OR ${e} LIKE '${elm}%'`
                if(i !== likeArr.length -1){
                    likeStr += ` OR `
                }
            })
            likeStr += `)`
        })
        sql += likeStr;
    }

    //點擊標籤
    if(req.query.tag){
        let tag = req.query.tag;

        sql += ` AND (\`stryTags\` LIKE '%"${tag}"' OR \`stryTags\` LIKE '"${tag}"%' OR \`stryTags\` LIKE '%"${tag}"%')`;
    }

    sql += ' GROUP BY \`stories\`.\`stryId\`';

    if(!req.query.orderby){
        sql = sql + ` ORDER BY \`stories\`.\`updated_at\` DESC LIMIT ${(currentPage - 1) * perPage}, ${perPage}`
    }else{
        if(req.query.orderby === 'time'){
            sql = sql + ` ORDER BY \`stories\`.\`updated_at\` DESC, \`stories\`.\`stryViews\` DESC LIMIT ${(currentPage - 1) * perPage}, ${perPage}`;
        }else if (req.query.orderby === 'views'){
            sql = sql + ` ORDER BY \`stories\`.\`stryViews\` DESC, likes DESC, \`stories\`.\`updated_at\` DESC LIMIT ${(currentPage - 1) * perPage}, ${perPage}`;
        }else if (req.query.orderby === 'likes'){
            sql = sql + ` ORDER BY likes DESC, \`stories\`.\`stryViews\` DESC, \`stories\`.\`updated_at\` DESC LIMIT ${(currentPage - 1) * perPage}, ${perPage}`;
        }else if (req.query.orderby === 'replies'){
            sql = sql + ` ORDER BY \`rplyTotal\` DESC, \`stories\`.\`stryViews\` DESC, \`stories\`.\`updated_at\` DESC LIMIT ${(currentPage - 1) * perPage}, ${perPage}`;
        }
    }


    console.log(sql)

    const countsql = 'SELECT COUNT(*) AS "stryTotal" FROM `stories` WHERE `stryStatus`="active"';

    db.queryAsync(sql)
    .then(r=>{

        db.queryAsync(countsql)
        .then(rs=>{
            // console.log(rs[0].stryTotal)

            r.forEach((elm, idx)=>{
                r[idx].fromNow = moment(elm.updated_at).fromNow()
            })
            let data = {
                data: r,
                stryTotal: rs[0].stryTotal
            }
            res.json(data);
            // console.log(data)

        })
        .catch(err=>console.log(err))


    })
    .catch(err=>{
        console.log(err);
    })
})

module.exports = router;