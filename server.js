const express = require('express')
const router = require('./routes/studRouter');
// const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser')
const app = express()
const config = require('./config/config.json')
//config = config.development;

app.use(bodyParser.json())

// const sequelize = new Sequelize('stud_crud_migration', 'root', '', {
//     dialect: 'mysql',
//     dialectOptions: {
//       // Your mysql2 options here
//     }
//   });

// app.get('/', (req, res) => {
//     res.send("Hello Everyone.")
// })


app.use(router)

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on the PORT http://localhost:${port}`)
})