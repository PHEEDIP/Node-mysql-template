var express = require('express')
var router = express.Router()
var bcrypt = require('bcryptjs')
var db = require('../db')
var jwt = require('../jwt')
var request = require('request')

router.post('/login', (req, res)=>{
    const {username, password} = req.body
    sql = "select * from user where username = '" + username + "'"
    db.query(sql, function (err, result) {
        
  });
})

router.post('/register', (req, res)=>{
    res.json({'msg': 'register'})
})

module.exports = router