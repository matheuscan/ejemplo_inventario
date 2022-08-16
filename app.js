const express = require('express');
const app = express()
const loginRoute = require('./routes/login')
const morgan = require('morgan')


app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use('/public', express.static('public'))
app.use('/public', express.static(__dirname + '/public'))

const router = express.Router()
app.get('/',(req, res) => {
    res.render('index', {})
})

app.use('/',loginRoute)
module.exports = app