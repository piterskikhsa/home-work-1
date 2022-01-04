import React from 'react'
import { Card, CardContent, TextField, Button } from '@mui/material'

function CommentForm({ addComment }) {
  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [text, setText] = React.useState('')
  const [sumbit, setSumbit] = React.useState(false)

  const addNewComment = () => {
    const comment = {
      fullName,
      email,
      text,
      createdAt: new Date().toLocaleString('ru-RU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      }),
    }
    addComment(comment)
    clearForm()
  }

  const handleUpdateField = (e) => {
    const value = e.target.value
    const name = e.target.name
    switch (name) {
      case 'email':
        setEmail(value.trim())
        break
      case 'fullName':
        setFullName(value.trim())
        break
      case 'text':
        setText(value)
        break
      default:
        console.log('Add name input')
    }
  }

  const clearForm = () => {
    setEmail('')
    setFullName('')
    setText('')
    setSumbit(false)
  }

  const checkEmptyForm = () => {
    if (fullName && email && text) {
      setSumbit(true)
    }
    if (!fullName || !email || !text) {
      setSumbit(false)
    }
  }

  return (
    <Card>
      <CardContent>
        <form onKeyUp={checkEmptyForm}>
          <h2>Обратная связь:</h2>
          <div>
            <TextField
              id="outlined-basic"
              label="Имя"
              variant="outlined"
              sx={{ marginBottom: '10px' }}
              name="fullName"
              value={fullName}
              onChange={handleUpdateField}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Почта"
              variant="outlined"
              sx={{ marginBottom: '10px' }}
              name="email"
              value={email}
              onChange={handleUpdateField}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Текст ..."
              variant="outlined"
              multiline
              rows={4}
              sx={{ marginBottom: '10px' }}
              name="text"
              value={text}
              onChange={handleUpdateField}
            />
          </div>
        </form>
        <Button
          variant="contained"
          disabled={sumbit ? null : true}
          onClick={addNewComment}
        >
          Отправить
        </Button>
      </CardContent>
    </Card>
  )
}

export default CommentForm
