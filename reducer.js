
const defaultState = {
  name: ''
}


const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'change':
      return Object.assign({},state, {name: action.data})
    case 'submit':
      return Objection.assign({},state, {name: action.data})
    default:
      return defaultState
  }
}

export default reducer
