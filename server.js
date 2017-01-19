var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var db = require('./models')
var routerSchools = require('./schoolRoutes')
var routerStudents = require('./studentRoutes')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('bundle'))

app.use("/api/school", routerSchools)
app.use("/api/student", routerStudents)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'))
})


db.sequelize.sync().then(function() {
  console.log('working on 3k')
  app.listen(3000) 

})

module.exports = app
