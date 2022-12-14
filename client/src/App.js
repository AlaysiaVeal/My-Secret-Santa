import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import List from './pages/List'
import About from './pages/About'
import { CheckSession } from './services/auth'
import Register from './pages/Register'
import Login from './pages/Login'
import { useState, useEffect } from 'react'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/list"
            element={<List authenticated={authenticated} user={user} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/register"
            element={
              <Register
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
        </Routes>
      </header>
      <main></main>
    </div>
  )
}

export default App
