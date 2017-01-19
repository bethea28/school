import React from 'react'
import $ from 'jquery'


var Post = React.createClass({
  render(){
    return (
      <div>
        <button>M</button>
          {this.props.children}
      </div>
    )
  }
})


export default Post
