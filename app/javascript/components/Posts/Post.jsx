import React from 'react'
import { BrowserRouter, Link } from "react-router-dom";

function Post(props) {

  return (
<div className="post-card">
    <h1 className="post-card-title">{props.attributes.title}</h1>
    <h2 className="post-card-description">{props.attributes.content}</h2>
  <div className='post-card-link'>
    <Link to={`/posts/${props.id}`}>View post</Link>
  </div>
</div>
  )
}

export default Post
