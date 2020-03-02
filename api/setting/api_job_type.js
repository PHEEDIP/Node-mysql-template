var express = require('express')
var router = express.Router()
var db = require('../../db')
var jwt = require('../../jwt')

router.get('/all', jwt.verify, (req, res)=>{
    sql = "SELECT * FROM it.job_type"
    db.query(sql, function (err, result) {
        try {
            res.json({data: result})
        } catch (error) {
        console.log(error)
        }
    })
})

router.get('/id/:tagId', (req, res)=>{
    res.json({'msg': 'id'+req.params.tagId})
})

router.post('/update', (req, res)=>{
    res.json({'msg': 'id'+req.params.tagId})
})

router.post('/add', (req, res)=>{
    res.json({'msg': 'id'+req.params.tagName})
})

module.exports = router