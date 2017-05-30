import React, {Component} from 'react'
import $ from 'jquery'
// import axios from 'axios'
let axios = require('axios')


class School extends Component {
  constructor(props) {
  super(props)
    this.state = {
      name: '',
      district: '',
      size: ''
    }
    this.submit = this.submit.bind(this)
    this.change = this.change.bind(this)
  }

  submit(event){
    event.preventDefault()
    axios.post('/api/school', {
    name: this.state.name,
    district: this.state.district,
    size: this.state.size
    })
    .then( (response)=> {
      console.log(response);
    })
    .catch( (error)=> {
      console.log(error);
    })

  }

  change(event){
  this.setState({[event.target.name]: event.target.value})
  console.log(event.target.value)
  }

  render(){
    return (
      <div>

        <form onSubmit = {(event)=>{this.submit(event)}}>
          <input onChange = {this.change} type = "input" placeholder = 'name' name = 'name'/>
          <input onChange = {this.change} type = "input" placeholder = 'district' name = 'district' />
          <input placeholder ='size' onChange = {this.change} type = "input" name = 'size'/>
          <input type = "submit" name = 'school'/>
        </form>


      </div>
    )
  }
}



export default School
