const express = require('express')
const router = express.Router()


const loginRoute = router.get('/login',(req,res) => {
    res.render('login', {})
})
module.exports = loginRoute