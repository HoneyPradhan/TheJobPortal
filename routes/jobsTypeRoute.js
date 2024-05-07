const express = require('express')
const router = express.Router()
const {createJobType, allJobsType, updateJobsType, deleteJobsType}=require('../controllers/jobsTypeController')
const { isAuthenticated,isAdmin} = require('../middleware/auth')

//job type routes

// /api/type/create
router.post('/type/create',createJobType)

// /api/type/jobs
router.get('/type/jobs',allJobsType)

 //   /api/type/update/:type_id
router.put('/type/update/:type_id',updateJobsType)
// /api/type/delete/:type_id

router.delete('/type/delete/:type_id',deleteJobsType)
module.exports= router
