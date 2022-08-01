import mongoose from 'mongoose'

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

export default mongoose.model("Post", postSchema)