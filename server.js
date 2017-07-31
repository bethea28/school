let express = require('express')
let app = express()
let bodyparser = require('body-parser')
let path = require('path')
let db = require('./models')
let routerSchools = require('./schoolRoutes')
let routerStudents = require('./studentRoutes')

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
  app.listen( 3000, () => console.log('Listening on port 3000'));


})

module.exports = app
