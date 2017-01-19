import React from 'react'
import List from './list'
import Post from './post'

import {render} from 'react-dom'
import ReactDOM from 'react-dom'
import {browserHistory, Router, Route} from 'react-router'



ReactDOM.render(
  <Router history = {browserHistory}>

    <Route path ='/' component= {List}/>
    <Route path ='/post' component= {Post}/>

  </Router>, document.getElementById('root')

)
