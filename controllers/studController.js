const db = require('../models/index');

// create new student 
const createStud=async(req,res)=>{
    let studData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    }
    console.log(studData)
    await db.Student.create(studData)
    return res.send("Data saved successfully !")
    // res.status(200).json({employees:data})
}

// fetch students data
const getStudents=async(req,res)=>{
    const data = await db.Student.findAll({});
    res.status(200).json({students:data})
}

// fetch single student using id 
const getStudent=async(req,res)=>{
    const data = await db.Student.findOne({where:{id:req.params.id}});
    res.status(200).json({students:data})
}

// update student
const updateStudent=async(req,res)=>{
    var updatedData=req.body
    const data = await db.Student.update(updatedData,{where:{id:req.params.id}});
    res.status(200).json({student:data})
}

// delete student
const deleteStudent=async(req,res)=>{
    const data = await db.Student.destroy({where:{id:req.params.id}});
    // res.status(200).json({student:data})
    return res.send("Data deleted successfully !")
}

module.exports=({
    createStud,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
})




