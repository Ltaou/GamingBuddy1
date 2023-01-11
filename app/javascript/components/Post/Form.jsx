import React, { useState } from 'react'


function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Enter title:
        <input type="text"
          onChange={props.handleChange}
          value = {props.reply.title}
          name="title"
        />
      </label>
      <label>Enter content:
        <input type="text"
          onChange={props.handleChange}
          value = {props.reply.content}
          name="content"
        />
      </label>
        <input type="submit" />
    </form>
  )
}

export default Form
