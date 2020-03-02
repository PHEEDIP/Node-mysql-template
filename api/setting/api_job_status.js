var express = require('express')
var router = express.Router()
var db = require('../../db')
var jwt = require('../../jwt')

router.get('/all', jwt.verify, (req, res)=>{
    sql = "SELECT * FROM it.job_status"
    db.query(sql, function (err, result) {
        try {
            res.json({data: result})
        } catch (error) {
        console.log(error)
        }
    })
})

module.exports = router