import React, {Component} from 'react'
import $ from 'jquery'
import Reusable from './reusable'
let axios = require('axios')


class Student extends Component {
  constructor(props) {
  super(props)
    this.state = {
      name: '',
      age: '',
      grade: '',
      SchoolId: '',
      Schoolname: '',
      schools: ''
    }
    this.submit = this.submit.bind(this)
    this.change = this.change.bind(this)
    this.handleDrop = this.handleDrop.bind(this)
  }

  componentDidMount(){
    console.log('hey')
    axios.get('/api/school')
    .then((data) => {
      console.log(data);
      this.setState({schools: data})

    })
    .catch(function (error) {
      console.log(error);
    });
//
  }

  submit(event){
    event.preventDefault()
    axios.post('/api/student', {
    name: this.state.name,
    age: this.state.age,
    grade: this.state.grade,
    SchoolId: this.state.SchoolId
    })
    .then( (response)=> {
      console.log(response);
    })
    .catch( (error)=> {
      console.log(error);
    })

  }

  handleDrop(event){
    console.log(event.target.value)
    this.setState({SchoolId: event.target.value})
    // this.setState({Schoolname: event.target.name})

    // axios.post('/api/student', {
    // name: this.state.name,
    // age: this.state.age,
    // grade: this.state.grade,
    // SchoolId: this.state.SchoolId
    // })
    // .then( (response)=> {
    //   console.log(response);
    // })
    // .catch( (error)=> {
    //   console.log(error);
    // })

    // axios.get('/api/student/' + this.state.Schoolname)

    // // })
    // .then( (response)=> {
    //   console.log(response);
    // })
    // .catch( (error)=> {
    //   console.log(error);
    // })
  }
  change(event){
  this.setState({[event.target.name]: event.target.value})
  console.log(event.target.value)
  }
  render(){
    return (
      <div>

        <form onSubmit = {(event)=>{this.submit(event)}}>
          <input onChange = {this.change} placeholder = 'name'
            type = "input"  name = 'name'/>
          <input onChange = {this.change} placeholder = 'age' name = 'age' />
          <input onChange = {this.change} placeholder = 'grade' name = 'grade'/>
          <input type = "submit" name = 'student' placeholder = 'student'/>
        </form>

        <select onChange = {(event) => {this.handleDrop(event)}}>
          <option> Choose School</option>


          {this.state.schools.data ? this.state.schools.data.map((ele, key)=>{
            return <option  value = {ele.id} key ={key}> {ele.name}</option>
          }) : <option> loading </option>}
        </select>

        <Reusable />
        {this.props.children}
        
      </div>

    )
  }
}


export default Student
