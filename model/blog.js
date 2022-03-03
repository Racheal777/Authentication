const mongoose = require('mongoose')


const{Schema} = mongoose

//embeded model example
const Comment = new Schema({
    name: String,
    message: String,
})

const userSchema = new Schema({
    author    : String,
     title     : String,
   body      : String,
   
   comments  : [Comment]
    
}, {timestamps: true}, )






//creating the model and assigning the schema to it
const Blog = mongoose.model('Blog', userSchema)

module.exports = Blog