import React from 'react'
import List from './list'
import Student from './studentPost'
import School from './schoolPost'
import store from './store'
import {Provider} from 'react-redux'

import {render} from 'react-dom'
import ReactDOM from 'react-dom'

import {Route} from 'react-router'
import {BrowserRouter as Router,} from 'react-router-dom'



const Routes = () => (
 <div>
  <Route exact path ='/student' component= {Student}></Route>
  <Route exact path ='/school' component= {School}></Route>
 </div>

)



// <School/>,
// <Router history = {browserHistory} routes = {routes}/>,
render(
  <Provider store = {store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,

  document.getElementById('root')

)




