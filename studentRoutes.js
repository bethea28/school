var express = require('express')
var app = express()
var router = require("express").Router()
var bodyParser = require('body-parser');
var Student = require("./models/index").Student



var createStudent = (req,res) =>{
  Student.create({
    name: req.body.name,
    age: req.body.age,
    grade: req.body.grade,
    SchoolId: req.body.SchoolId
  })
  .then((data)=>{
    // console.log(data)
    // data.dataValues.message = 'Student successfully added!'
    res.send({student:data, message: "Student successfully added!"})
  })
  .catch((err)=>{
    console.log(err)
  })
}


const getAllStudents = (req, res) => {
  Student.findAll({

  }).then((data) => {
    res.send(data)
  })
}



router.route("/")
  .post(createStudent)
  .get(getAllStudents)


module.exports = router
