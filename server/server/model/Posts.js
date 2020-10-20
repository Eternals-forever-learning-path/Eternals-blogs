const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    image: {
        type: String
    },
    blogType: {
        type: String,
        required: true
    },
    author_id: {
        type: Schema.Types.ObjectId,
        ref: 'Details'
    }
},{
    timestamps: true,
})  

module.exports = mongoose.model("Posts", postSchema) 