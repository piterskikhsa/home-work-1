import React from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import { Card, CardContent, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

function Comments({ comments, removeCommet }) {
  return (
    <Card sx={{ margin: '0 0 20px 0' }}>
      <CardContent>
        <h2>Отзывы:</h2>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
          }}
        >
          {comments &&
            comments.map((comment, index) => (
              <ListItem key={`${comment.email}-${index}`}>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <div>
                  <React.Fragment>
                    <Typography
                      component="p"
                      variant="body2"
                      color="text.primary"
                    >
                      {comment.fullName}
                    </Typography>
                    <Typography
                      component="p"
                      variant="body2"
                      color="text.primary"
                    >
                      {comment.text}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body3"
                      color="text.secondary"
                    >
                      {comment.createdAt}
                    </Typography>
                  </React.Fragment>
                </div>
                <IconButton
                  aria-label="delete"
                  size="large"
                  color="error"
                  sx={{ marginLeft: 'auto' }}
                  onClick={() => {
                    removeCommet(index)
                  }}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </ListItem>
            ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default Comments
