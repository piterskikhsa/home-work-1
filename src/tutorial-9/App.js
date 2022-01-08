import axios from 'axios'
import React from 'react'
import UserInfo from './components/UserInfo'

function App() {
  const [login, setLogin] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [user, setUser] = React.useState({})
  const [error, setError] = React.useState({ error: false, message: '' })

  React.useEffect(() => {
    ;(async () => {
      const searchParams = new URLSearchParams(window.location.search)
      const loginName = searchParams.get('login')
      if (loginName) {
        setLogin(loginName)
        await loadingUserInfo(loginName)
      }
    })()
  }, [])

  const getUserData = async (userLogin) => {
    const urlPath = `https://api.github.com/users/${userLogin}`
    try {
      const response = await axios.get(urlPath, {
        validateStatus: function (status) {
          return status < 400
        },
      })
      setUser(response.data)
    } catch (error) {
      setError({ error: true, message: error.response.data.message })
    }
  }

  const clearError = () => {
    setError({ error: false, message: '' })
  }

  const loadingUserInfo = async (loginName) => {
    clearError()
    setLoading(true)
    await getUserData(loginName)
    setLoading(false)
  }
  const handleFindUser = async (event) => {
    await loadingUserInfo(login)
  }

  const handleUserLogin = (event) => {
    const value = event.target.value.trim()
    setLogin(value)
    const url = new URL(window.location.href)
    url.searchParams.set('login', value)
    window.history.pushState({}, '', url.toString())
  }

  return (
    <div className="app-container">
      <form className="app-form">
        <input
          type="text"
          className="app-input"
          placeholder="Укажите GitHub-аккаунт"
          name="login"
          value={login}
          onChange={handleUserLogin}
        />

        <button
          className="app-form_btn"
          onClick={handleFindUser}
          disabled={loading}
        >
          Найти
        </button>
      </form>
      {loading && <p>Загрузка...</p>}
      {user.login && !error.error && <UserInfo user={user} />}
      {error.error && <p>{error.message}</p>}
    </div>
  )
}

export default App
