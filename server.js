const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
var db = require('./db.js')
const app = express()
, server = require('http').createServer(app)
var userOnline = [];

app.start = app.listen = function(){
return server.listen.apply(server, arguments)
}

// Allow client to access cross domain or ip-address
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
});

app.use(express.static(path.join(__dirname, './uploaded')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api/v1', require('./api.js'))

//port number
app.start(8080)
