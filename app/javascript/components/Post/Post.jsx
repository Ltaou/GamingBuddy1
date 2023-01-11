// import React from 'react'
import React, { useState, useEffect, Fragment } from 'react'
import { useParams } from "react-router-dom"
import Header from "./Header"
import Reply from "./Reply"
import Form from "./Form"


function Post() {
  const [loaded, setLoaded] = useState(false)
  const [post, setPost] = useState([])
  const [reply, setReply] = useState({title:"", content:"" })
  let params = useParams()
  useEffect(() =>{
    fetch(`/api/v1/posts/${params.id}`)

    .then((response) => response.json())
    .then((resp) =>{
      console.log(resp.included)

      setPost(resp)
      setLoaded(true)
    });
  }, [])
  const handleChange = (event) => {
    event.preventDefault()
    const name = event.target.name || ""
    const value = event.target.value || ""
    setReply(Object.assign({}, reply, {[name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const post_id = post.data.id
    const csrfToken = document.querySelector("[name=csrf-token]").content
    fetch(`/api/v1/replies/`, {
      method: "POST",
      headers: { "Content-Type":"application/json", "X-CSRF-Token":csrfToken },
      body: JSON.stringify({reply: reply, post_id:post_id})

    })
    .then((response) => response.json())
    .then((resp) =>{
      console.log(resp.data)
      const included = [...post.included, resp.data]
      setPost({...post, included})
      setReply({title:"", content:""})
    });
    }
    const replies = loaded ? post.included : null
    const grid = loaded && post.included ? replies.map(reply => {
      // console.log(reply)
      return (
        <Reply
        key={reply.id}
        id={reply.id}
        attributes = {reply.attributes}
        />
        )
      }) : null


  return (
    <div className='container'>
      {loaded &&
        <Fragment>
          <div className="column-left">
            <Header
            attributes = {post.data.attributes}
            replies = {post.data.relationships.replies.data.length}
            />
            {grid}
          </div>
          <div className="column-right">
            <Form
            key={post.id}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            reply = {reply}
            />
          </div>
        </Fragment>
      }
      </div>
    )
}

export default Post
