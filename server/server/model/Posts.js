const mongoose = require('mongoose')
const { Schema } = mongoose 

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
    name:{
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    }
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})  

module.exports = mongoose.model("Posts", postSchema) 