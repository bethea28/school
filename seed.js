const Sequelize = require('./models').Sequelize;

const School = require('./models/index').School
const Student = require('./models/index').Student


School.sync({force: true})
.then(()=> School.bulkCreate([

      {name:'James Madison HighSchool', district: 22, size:3400},
      {name:'Edward R Murrow', district:21 , size:3855},
      {name:'Midwood', district:22, size:3989},
      {name:'Brooklyn Tech' ,district:13, size:5659}


]))

Student.sync({force: true})
.then(()=> Student.bulkCreate([


      {name:"Chanice" , age: 24, grade:12, SchoolId:1 },
      {name:"Mel" , age: 26, grade: 12, SchoolId:2},
      {name:"Bryan" , age:26 , grade:12, SchoolId:1}


]))
//   .then(data => {
//     Student.bulkCreate([
//     ])
//   })
//   .catch(error => console.log(error))
// }

// .catch((err) => console.log(err));
//
// const Seed = () => {
//   School.bulkCreate([
//     {name:'James Madison HighSchool', district: 22, size:3400},
//     {name:'Edward R Murrow', district:21 , size:3855},
//     {name:'Midwood', district:22, size:3989},
//     {name:'Brooklyn Tech' ,district:13, size:5659}
//   ])
// module.exports = Seed
