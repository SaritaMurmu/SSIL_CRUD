
const db = require('../models/index');

// post user
// postUser(req, res){
//     // console.log(req.body)
//     // var postData=req.body
//     // var data = await queryInterface.sequelize.models.Employee.create({postData});
//     // console.log(data)
//     // res.status(200).json({employees:data})

//     // await queryInterface.sequelize.models.User.create({
//     //     name: 'John Doe',
//     //     email: 'john.doe@example.com'
//     //   });
//     // }


//     // Employee.create(empData).then((data) => {
//     //     res.send({ employee: data })
//     // }).catch(error => {
//     //     res.status(500).send(error)
//     // })
// }

// module.exports = ({
//     postUser,

// })

const postUser = async (req, res) => {
    let empData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        dob: req.body.dob,
        address: req.body.address,
        designation: req.body.designation
    }
    console.log(empData)

    return await Employee.create(empData)
   
}

const postStud = async (req, res) => {
    let empData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        // dob: req.body.dob,
        // address: req.body.address,
        // designation: req.body.designation
    }
    console.log(empData)
    await db.Student.create(empData)
    return res.send("Data saved succssfully")
   
}


module.exports = ({
    postUser,
    postStud
});





