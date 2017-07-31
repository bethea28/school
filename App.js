import React from 'react'
import List from './list'
import Student from './studentPost'
import School from './schoolPost'
import store from './store'
import {Provider} from 'react-redux'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import {render} from 'react-dom'
import ReactDOM from 'react-dom'

import {Route} from 'react-router'
import {BrowserRouter as Router,} from 'react-router-dom'


const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/__PROJECT_ID__'}),
})

const Routes = () => (
 <div>
  <Route exact path ='/student' component= {Stdent}></Route>
  <Route exact path ='/school' component= {School}></Route>
 </div>

)



// <School/>,
// <Router history = {browserHistory} routes = {routes}/>,
render(
 <ApolloProvider client = {client}>
  <Provider store = {store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
 </ApolloProvider>,

  document.getElementById('root')

)




