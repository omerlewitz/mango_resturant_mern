const express = require('express')
const dotenv = require('dotenv').config();
const app = express()

const post_routes = require('./routes/post_routes')
app.use('/post', post_routes)


const port = process.env.PORT
app.listen(port, ()=>{
    console.log("server started on port: " + port)
})