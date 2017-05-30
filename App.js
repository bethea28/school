import React from 'react'
import List from './list'
import Student from './studentPost'
import School from './schoolPost'

import {render} from 'react-dom'
import ReactDOM from 'react-dom'
import {browserHistory, Router, Route} from 'react-router'





const routes = (
  <div>

    <Route path ='/' component= {List}/>
    <Route path ='/student' component= {Student}/>
    <Route path ='/student/:id' component= {Student}/>
    <Route path ='/school' component= {School}/>
  </div>

)

render(
  <Router history = {browserHistory} routes = {routes}/>,



  document.getElementById('root')

)
