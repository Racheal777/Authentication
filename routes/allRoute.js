//requiring modules
const express = require('express')
const allcontrol = require('../controllers/allcontrol')

const router = express.Router()

//rendering files

router.get('/', allcontrol.home)

router.get('/register', allcontrol.signup)

router.get('/login', allcontrol.login)



module.exports = router