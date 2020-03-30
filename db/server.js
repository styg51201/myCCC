const express = require('express') //express
const session = require('express-session') //session
const cors = require('cors') //CORS
const db = require('./db_connect')
const bodyParser = require('body-parser') //解析POST參數

//建立webserver物件
const app = express()

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: 'whatever123456',
    cookie: {
      masAge: 1200000,
    },
  })
)

//CORS
//記得前端設定credentials = 'include'
const whiteList = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://127.0.0.1:5500', //vs code
  undefined,
]
const corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(null, false)
    }
  },
}
app.use(cors(corsOptions))

// post 傳送格式有兩種 urlencoded 和 json
app.use(bodyParser.urlencoded({ extended: false })) //解析urlencoded格式
app.use(bodyParser.json()) //解析json格式

//test db
app.get('/try-db', (req, res) => {
  let sql = 'SELECT * FROM `user_comment` '
  db.queryAsync(sql).then(r => {
    return res.json(r)
  })
})

//test items
app.use('/items', require(__dirname + '/items'))
//stories
app.use('/shopCart', require(__dirname + '/shopCart'))
//coupon
app.use('/getCoupon', require(__dirname + '/getCoupon'))

//stories
app.use('/stories', require(__dirname + '/stories'))

//stories
app.use('/member', require(__dirname + '/member'))
//home page
app.use('/home', require(__dirname + '/home'))

//backend
app.use('/backend', require(__dirname + '/backend'))

app.use('/public', express.static('./public'))

//test
app.get('/', (req, res) => {
  res.send('hello')
})

//404
app.use((req, res) => {
  res.send('404 not found')
})

app.listen(5500, () => {
  console.log('Express server start')
})
