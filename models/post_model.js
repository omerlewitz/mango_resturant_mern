const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    Message:{
        type: String,
        requtired: true
    },
    Sender:{
        type: String,
        requtired: true
    },
})

module.exports = mongoose.model("Post", postSchema)