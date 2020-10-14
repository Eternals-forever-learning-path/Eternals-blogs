const mongoose = require('mongoose')
const { Schema } = mongoose 

const detailSchema = new Schema({
    linkGithub: {
        type: String,
        required: true
    },
    linkLinkedIn: {
        type: String,
        required: true 
    },
    linkPersonal:{
        type: String,
        required: true
    },
    image: {
        type: String
    }
})  

module.exports = mongoose.model("Details", detailSchema) 
