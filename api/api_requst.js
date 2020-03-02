var express = require('express')
var router = express.Router()
var db = require('../db')
var jwt = require('../jwt')

router.put('/request', (req, res) => {
    res.json({'msg': 'register'})
})
.get('/request', (req, res) => {
    sql = ""
    db.query(sql, (err, result) => {
        try {
                res.json({data: result})
        } catch (error) {
            console.log(error)
        }
  });
})
.post('/request' , (req, res) => {
    let {last_id, top_id, filter} = req.body
    sql ='' 
    console.log(sql)
    db.query(sql, function (err, result) {
        try {
                res.json({data: result})
        } catch (error) {
            console.log(error)
        }
  });
})

router.post('/request/lazy' , (req, res) => {
    let {last_id, top_id, filter} = req.body
    sql =''

    console.log(sql)
    db.query(sql, function (err, result) {
        try {
                res.json({data: result})
        } catch (error) {
            console.log(error)
        }
  });
})

module.exports = router