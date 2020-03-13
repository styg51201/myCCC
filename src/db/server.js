const express = require('express') //express
const session = require('express-session') //session
const cors = require('cors') //CORS

//建立webserver物件
const app = express();

//test
app.get('/', (req, res)=>{
    res.send("hello")
})

app.use((req, res)=>{
    res.send("404 not found")
})


app.listen(3000, ()=>{
    console.log('Express server start')
})