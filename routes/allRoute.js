//requiring modules
const express = require('express')
const allcontrol = require('../controllers/allcontrol')
const{authUser, getUser} = require('../middleware/authUser')

const router = express.Router()

//rendering files

//showing the user in all the get request
router.get('*', getUser)

router.get('/', allcontrol.home)

router.get('/about',authUser, allcontrol.about)

router.get('/register', allcontrol.signup)

router.get('/login', allcontrol.login)



module.exports = router