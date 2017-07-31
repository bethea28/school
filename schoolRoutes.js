// var express = require('express')
// var app = express()
var router = require("express").Router()
// var bodyParser = require('body-parser');
var School = require("./models/index").School
var Student = require("./models/index").Student



var createSchool = (req,res) =>{
  School.create({
    name: req.body.name,
    district: req.body.district,
    size: req.body.size
  })
  .then((data)=>{
    // console.log(data)
    data.dataValues.message = 'School successfully added!'
    console.log(data.dataValues)
    res.send(data.dataValues)
  })
  .catch((err)=>{
    console.log(err)
  })
}

var getAllSchools = (req,res) => {
  School.findAll({

  })
  .then ((data) => { 
    console.log(data.dataValues)
    res.send(data)
  })
}

var getOneSchool = (req,res) =>{
  School.findOne({
    where:{
      name: req.params.id
    },
    // include: Student
  })
  .then((data)=>{
    console.log(data)
    res.send(data)
  })
  .catch((err)=>{
    console.log(err)
  })
}





router.route("/")
  .post(createSchool)
  .get(getAllSchools)
router.route("/:id")
  .get(getOneSchool)



module.exports = router
