const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const detailSchema = new Schema({
    // linkGithub: {
    //     type: String,
    //     // required: true
    // },
    posts_id:{
        type: Schema.Types.ObjectId,
        ref: 'Posts'
    },
    
    // linkLinkedIn: {
    //     type: String,
    //     // required: true 
    // },
    // linkPersonal:{
    //     type: String,
    //     // required: true
    // },
    // image: {
    //     type: String
    // },
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
