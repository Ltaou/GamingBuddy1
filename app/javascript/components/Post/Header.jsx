import React from 'react'

function Header(props) {
  return (
      <div className="contain-1">
        <h1 className="total">{props.replies}</h1>
        <h2 className="post-show-title total">{props.attributes.title}</h2>
        <h3 className="post-show-title">{props.attributes.content}</h3>
      </div>
  )
}

export default Header
