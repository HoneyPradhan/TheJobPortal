const express = require('express')
const router = express.Router()
// const {sign_in} =require('../controllers/authController')
const {allUsers, singleUser, editUser, deleteUser, createUserJobsHistory}=require('../controllers/userController')
const {isAuthenticated,isAdmin}=require('../middleware/auth')



// /api/allUsers
router.get('/allUsers',allUsers)

// /api/user/id
router.get('/user/:id',singleUser)

// /api/user/edit/id
router.put('/user/edit/:id',editUser)
// /api/user/delete/id
router.delete('/admin/user/delete/:id',isAdmin,deleteUser)

// /api/user/jobhistory
router.post('/user/jobhistory',createUserJobsHistory)


module.exports = router;
