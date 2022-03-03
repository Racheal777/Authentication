const mongoose = require('mongoose')


const{Schema} = mongoose




const travelSchema = new Schema({
    id    : Number,
    name:   String,
    location : String,
    description: String,
    image:      String
    
    
}, {timestamps: true}, )






//creating the model and assigning the schema to it
const Travel = mongoose.model('Travel', travelSchema)

module.exports = Travel