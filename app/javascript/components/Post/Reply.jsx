import React from 'react'

function Reply(props) {
  return (
    <div className="contain-1">
      <h2 className="reply-title total">{props.attributes.title}</h2>
      <h3 className="reply-content total">{props.attributes.content}</h3>
      </div>
  )
}

export default Reply
