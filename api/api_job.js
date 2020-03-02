var express = require('express')
var router = express.Router()

router.post('/all', (req, res)=>{
    res.send(req)
})

router.get('/id/:tagId', (req, res)=>{
    res.json({'msg': 'id'+req.params.tagId})
})

router.get('/employee/:tagId', (req, res)=>{
    res.json({'msg': 'id'+req.params.tagId})
})

router.get('/user/:tagId', (req, res)=>{
    res.json({'msg': 'id'+req.params.tagId})
})

router.get('/dep/:tagId', (req, res)=>{
    res.json({'msg': 'id'+req.params.tagId})
})

router.get('/section/:tagId', (req, res)=>{
    res.json({'msg': 'id'+req.params.tagId})
})

router.get('/status/:tagName', (req, res)=>{
    res.json({'msg': 'id'+req.params.tagName})
})

router.post('/edit', (req, res)=>{
    res.json({'msg': 'id'+req.params.tagName})
})

module.exports = router