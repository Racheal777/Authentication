//requiring all modules

const express = require('express')
const dotenv = require("dotenv").config()
const mongoose = require('mongoose')
const allRoute = require('./routes/allRoute')

const PORT = process.env.PORT || 7000

//assigning a variable to express
const app = express()

//setting up the database

mongoose.connect(process.env.mongoUri, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(result => {
    console.log("Database connected")
}).catch(err => {
    console.log(err)
})


//using middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//using ejs
app.set("view engine", "ejs")

//serving static files
app.use(express.static('public'))

//using modules
app.use(allRoute)

//listenining to the server

app.listen(PORT, () => console.log(`Server is listening at ${PORT}`))