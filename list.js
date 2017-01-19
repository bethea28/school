import React from 'react'
import $ from 'jquery'


var List = React.createClass({
  getInitialState(){
    return {
      schools: []
    }
  },
  handleClick(){
    console.log('it works')

  },

  componentDidMount(){
    $.ajax({
      url: "/api/school",
      type: "GET",
    })
    .done((data)=>{
      // var schools = null
      // console.log(data)
      var schools =  data.map(function(a,b){
          return a.name
      })
      // console.log(schools)
      this.setState({schools: schools})
      console.log(this.state.schools)
    })
  },
            // {this.state.schools.map(function(ele,key){
            //    return <li onClick ={this.handleClick} key = {key}> {ele} </li>
            // }.bind(this))}

  render(){
    return(
        <div>
          <ul>
            {this.state.schools.map(function(a,b){
              return <li key ={b}> {a} </li>
            })}
          </ul>
        </div>
    )
  }
})


export default List
