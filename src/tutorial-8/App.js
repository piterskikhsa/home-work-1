import React from 'react'

import './App.css'

function App() {
  const [users, setUsers] = React.useState([])

  const getUsers = async () => {
    try {
      const url = 'https://61d87fd3e6744d0017ba8b71.mockapi.io/users1/'
      const response = await fetch(url)
      const data = await response.json()
      if (Array.isArray(data)) {
        setUsers(data)
      } else {
        console.log(data)
      }
    } catch (err) {
      console.log('Ошибка: ' + err)
    }
  }

  return (
    <div>
      <ul>
        {users.length > 0 &&
          users.map((user) => (
            <li key={user.id}>
              {user.id}.{user.name}
            </li>
          ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
    </div>
  )
}

export default App
