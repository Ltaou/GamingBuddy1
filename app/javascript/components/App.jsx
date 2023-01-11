import React from 'react'
import Posts from './Posts/Posts'
import Post from './Post/Post'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<Posts />} />
      <Route exact path="/posts/:id" element={<Post />} />
    </Routes>
  </Router>
  )
}

export default App
