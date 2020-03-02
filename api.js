var express = require('express')
var router = express.Router()

const AuthenAPI = require('./api/api_auth');
const SettingAPI = require('./api/api_setting');
const UserAPI = require('./api/api_user');
const JobAPI = require('./api/api_job');
const RequestAPI = require('./api/api_requst');

router.use('/auth', AuthenAPI)
router.use('/setting', SettingAPI)
router.use('/user', UserAPI)
router.use('/job', JobAPI)
router.use(RequestAPI)

module.exports = router