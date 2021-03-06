process.env.NODE_ENV = 'test';

let models = require('./models')
let School = models.School;
let Student = models.Student;

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./server.js');
let should = chai.should();

//write a function to seed your database before every test inside of the seed folder
//your seed function should create 4 schools
//your seed function should create 2 students that attend the first school
let seedFunction = require('./seed')


chai.use(chaiHttp);
//Our parent block
describe('Education', () => {
    beforeEach((done) => { //Before each test we empty the database
      models.sequelize.sync({force: true}).then(function() {
        seedFunction()
        done();
      })
    });
/*
  * Test the /GET route
  */
  describe('/GET school', () => {
      it('it should GET all the schools', (done) => {
        chai.request(server)
            .get('/api/school')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(4);
              done();
            });
      });
  });

  describe('/POST school', () => {
      it('it should POST a school ', (done) => {
        let school = {
          name: 'Byrd',
          district: 5,
          size: 3000

        }
        chai.request(server)
            .post('/api/school')
            .send(school)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('School successfully added!');
                res.body.should.have.property('name');
                res.body.should.have.property('district');
                res.body.should.have.property('size');
              done();
            });
      });
  });

  describe('/POST student', () => {
      it('it should POST a student ', (done) => {
        let student = {
          name: 'James',
          age: 5,
          grade: 3      
        }
        chai.request(server)
            .post('/api/student')
            .send(student)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Student successfully added!');
                res.body.student.should.have.property('name');
                res.body.student.should.have.property('age');
                res.body.student.should.have.property('grade');
              done();
            });
      });
  });

  describe('/GET school', () => {
      it('it should GET a single school along with all its students', (done) => {
        chai.request(server)
            .get('/api/school/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('district');
                res.body.should.have.property('size');
                res.body.Students.should.be.a('array');
                res.body.Students.length.should.be.eql(2);
              done();
            });
      });
  });

});
