import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import $ from 'jquery'
import {submit, change} from './actions'
let axios = require('axios')
import Reusable from './reusable'

import store from './store'

//
// class School extends Component {
//   constructor(props) {
//     super(props)
//       this.state = {
//         name: '',
//         district: '',
//         size: ''
//       }
//       // this.submit = this.submit.bind(this)
//       // this.handleChange = this.handleChange.bind(this)
//   }
//
//   submit(event){
//     event.preventDefault()
//     axios.post('/api/school', {
//     name: this.state.name,
//     district: this.state.district,
//     size: this.state.size
//     })
//     .then( (response)=> {
//       console.log(response);
//     })
//     .catch( (error)=> {
//       console.log(error);
//     })
//
//   }
//
//   handleChange(event){
//   this.setState({[event.target.name]: event.target.value})
//   console.log(event.target.value)
//   }
let School = (props) => {
  // let handleChange = (event) => {
  //   console.log(event.target.value)
  // }
    return (
      <div>

        <form onSubmit = {(event)=>{props.submit(event)}}>

          <input onChange = {(event)=>{props.change(event.target.value)}} type = "input" placeholder = 'name' name = 'name' />

          <input onChange = {(event)=>{props.change(event.target.value)}} type = "input" placeholder = 'district' name = 'district' />
          
          <input onChange = {(event)=>{props.change(event.target.value)}} type = "input" placeholder = 'size' name = 'size' />

        </form>
        <Reusable />

        {props.name}
        {props.children}

      </div>
    )

}




const mapPropsToState = store => (
  {
    name: store.name,
    district: store.district,
    size: store.size
  }
)

const dispatchPropsToState = (dispatch) => (
  bindActionCreators({
   submit, change }, dispatch)
);


//
export default connect (
  mapPropsToState,
  dispatchPropsToState
) (School)

// export default School
