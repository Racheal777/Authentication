//requiring all modules

const express = require('express')
const dotenv = require("dotenv").config()
const mongoose = require('mongoose')
const allRoute = require('./routes/allRoute')
const registerR = require('./routes/registerRo')
const cookieParser = require("cookie-parser");


const PORT = process.env.PORT || 3000

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
app.use(cookieParser()); //cookies

//using ejs
app.set("view engine", "ejs")

//serving static files
app.use(express.static('public'))

//using modules
app.use(allRoute)
app.use(registerR)

//using locals properties

app.locals.data ={
    name     : "valentine baby",
    username : "iamavalentinebaby"
}
console.log(app.locals.data)






//listenining to the server

app.listen(PORT, () => console.log(`Server is listening at ${PORT}`))