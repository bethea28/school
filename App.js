import React from 'react'
import List from './list'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'
import {browserHistory, Router, Route} from 'react-router'

// var App = React.createClass({
//   render(){
//     return(
//         <div>
//           <button> Fuck</button>
//         </div>
//     )
//   }
// })



render(
  <Router history = {browserHistory}>

    <Route path ='/' component= {List}/>

  </Router>, document.getElementById('root')

)
