import React, { useState, useEffect } from 'react'
import Post from "./Post"


function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(() =>{
    fetch('/api/v1/posts')
  .then((response) => response.json())
  .then((resp) => setPosts(resp.data));
  }, [posts.length])
  const grid = posts.map(post => {
    return (
      <Post
        key = {post.id}
        attributes = {post.attributes}
        id={post.id}
      />
    )
  })
  return (
    <div>
    <h1 className="total">index posts</h1>
    <div className="postlist">
    {grid}
    </div>
    </div>

    )
}

export default Posts
