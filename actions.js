import axios from 'axios';
import store from './store';


//
// export const change = (event) => {
//   console.log("event.target.value")
// }

// const handleChange = data => ({
//   console.log('man')
//   type:'change', data: "data"
// })

export const change = (data)=> {
  // console.log(event.target.value)
  return {
    type:'change', data:data
  }
}
