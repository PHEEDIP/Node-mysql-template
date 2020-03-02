var express = require('express')
var router = express.Router()

const JobTypeAPI = require('./setting/api_job_type')
const DepAPI = require('./setting/api_dep')
const SectionAPI = require('./setting/api_section')
const DevTypeAPI = require('./setting/api_dev_type')
const TableAPI = require('./setting/api_table')
const StatusAPI = require('./setting/api_job_status')

router.use('/jobtype', JobTypeAPI)
router.use('/dep', DepAPI)
router.use('/section', SectionAPI)
router.use('/devtype', DevTypeAPI)
router.use('/table', TableAPI)
router.use('/status', StatusAPI)

module.exports = router