import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'react-thunk'

// const store = createStore(reducer, (applyMiddleware(thunk)))
const store = createStore(reducer)


export default store
