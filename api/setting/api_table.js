var express = require('express')
var router = express.Router()

router.get('/all', (req, res)=>{
    res.json({'msg': 'user-all'})
})

router.get('/id/:tagId', (req, res)=>{
    res.json({'msg': 'id'+req.params.tagId})
})

router.get('/section/:tagId', (req, res)=>{
    res.json({'msg': 'id'+req.params.tagId})
})

router.get('/dep/:tagId', (req, res)=>{
    res.json({'msg': 'id'+req.params.tagId})
})

router.post('/update', (req, res)=>{
    res.json({'msg': 'id'+req.params.tagId})
})

router.post('/add', (req, res)=>{
    res.json({'msg': 'id'+req.params.tagName})
})

module.exports = router