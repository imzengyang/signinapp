const express = require('express')
const route = express.Router()
const signin = require('../controllers/signin.controller')

route.get('/',signin.findAll)
route.post('/create',signin.create)

module.exports = route;