const express=require('express')
const router=express()

const controller=require('../controllers/studController')

router.post('/create',controller.createStud)
router.get('/',controller.getStudents)
router.get('/student/:id',controller.getStudent)
router.patch('/update/:id',controller.updateStudent)
router.delete('/delete/:id',controller.deleteStudent)

module.exports=router

