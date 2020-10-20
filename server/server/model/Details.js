const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const detailSchema = new Schema({
    linkGithub: {
        type: String,
    },
    linkLinkedIn: {
        type: String, 
    },
    linkPersonal:{
        type: String, 
    },
    image: {
        type: String,
    },
    posts_id:{
        type: Schema.Types.ObjectId,
        ref: 'Posts'
    },
    uniqueName: {
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
    },
})  

module.exports = mongoose.model("Details", detailSchema) 
