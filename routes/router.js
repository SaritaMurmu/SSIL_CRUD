const express=require('express')
const router=express()

const controller=require('../controllers/empController')

router.post('/add',controller.postUser)
// router.post('/addStud',controller.postStud)

module.exports=router


