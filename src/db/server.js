const express = require('express') //express
const session = require('express-session') //session
const cors = require('cors') //CORS
const db = require('./db_connect')

//建立webserver物件
const app = express();

app.use(session({
    saveUninitialized : false,
    resave: false,
    secret: 'whatever123456',
    cookie:{
        masAge: 1200000
    }
}));

//CORS
//記得前端設定credentials = 'include'
const whiteList = [
    'http://localhost:3000',
    undefined
]
const corsOptions = {
    credentials: true,
    origin: function(origin, callback){
        if(whiteList.indexOf(origin) !== -1){
            callback(null, true)
        }else{
            callback(null, false)
        }
    }
}
app.use(cors(corsOptions));


//test db
app.get('/try-db', (req, res)=>{
    let sql='SELECT * FROM `user_comment` '
    db.queryAsync(sql)
    .then(r=>{
        return res.json(r)
    })
})

//test items
app.use('/items', require(__dirname + '/items'));

//coupon
app.use('/getCoupon', require(__dirname + '/getCoupon'));

//test
app.get('/', (req, res)=>{
    res.send("hello")
})


//404
app.use((req, res)=>{
    res.send("404 not found")
})


app.listen(5500, ()=>{
    console.log('Express server start')
})