import React from 'react'
import { Card, CardContent, TextField, Button } from '@mui/material'

function CommentForm({ addComment }) {
  const [fields, setFields] = React.useState({
    fullName: '',
    email: '',
    text: '',
    sumbit: false,
  })

  const addNewComment = () => {
    const comment = {
      fullName: fields.fullName,
      email: fields.email,
      text: fields.text,
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
    const name = e.target.name
    const value = name === 'text' ? e.target.value : e.target.value.trim()

    setFields({ ...fields, [name]: value })
  }

  const clearForm = () => {
    setFields({ fullName: '', email: '', text: '', sumbit: false })
  }

  const checkEmptyForm = () => {
    setFields({
      ...fields,
      sumbit: !(!fields.fullName || !fields.email || !fields.text),
    })
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
              value={fields.fullName}
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
              value={fields.email}
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
              value={fields.text}
              onChange={handleUpdateField}
            />
          </div>
        </form>
        <Button
          variant="contained"
          disabled={fields.sumbit ? false : true}
          onClick={addNewComment}
        >
          Отправить
        </Button>
      </CardContent>
    </Card>
  )
}

export default CommentForm
