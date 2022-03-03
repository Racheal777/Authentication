//requiring modules
const express = require('express')
const allcontrol = require('../controllers/allcontrol')
const{authUser, getUser} = require('../middleware/authUser')

const Blogy = require('../controllers/blog')

const router = express.Router()

//rendering files

//showing the user in all the get request
router.get('*', getUser)

router.get('/', allcontrol.home)

router.get('/about',authUser, allcontrol.about)

router.get('/register', allcontrol.signup)

router.get('/login', allcontrol.login)

//blg routes

router.post('/blog', Blogy.saveBlog)

router.get('/get', Blogy.getB)

router.post('/post', Blogy.save)

router.get('/getJson', Blogy.getJson)

module.exports = router