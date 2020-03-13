const express = require('express') //express
const session = require('express-session') //session
const cors = require('cors') //CORS
const db = require('./db_connect')

//建立webserver物件
const app = express();


//test db
app.get('/try-db', (req, res)=>{
    let sql='SELECT * FROM `user_comment` '
    db.queryAsync(sql)
    .then(r=>{
        return res.json(r)
    })
})

//test
app.get('/', (req, res)=>{
    res.send("hello")
})


//404
app.use((req, res)=>{
    res.send("404 not found")
})


app.listen(3000, ()=>{
    console.log('Express server start')
})