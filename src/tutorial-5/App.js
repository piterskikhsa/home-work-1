import React from 'react'

import { Container } from '@mui/material'

import CommentForm from './components/CommentForm'
import Comments from './components/Comments'

import './App.css'

function App() {
  const [comments, setComments] = React.useState([])

  React.useEffect(() => {
    const comments = JSON.parse(localStorage.getItem('comments'))
    setComments(comments || [])
  }, [])

  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments])

  const handleAddComment = (comment) => {
    setComments([...comments, comment])
  }
  const handleRemoveComment = (index) => {
    const newComments = comments.filter((_, i) => index !== i)
    setComments(newComments)
  }

  return (
    <Container maxWidth="sm">
      <Comments comments={comments} removeCommet={handleRemoveComment} />
      <CommentForm addComment={handleAddComment} />
    </Container>
  )
}

export default App
