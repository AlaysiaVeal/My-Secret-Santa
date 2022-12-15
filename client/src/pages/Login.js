import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SignInUser } from '../services/auth'

const Login = ({ setUser, toggleAuthenticated }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setUser(payload)
    toggleAuthenticated(true)
    setFormValues({ email: '', password: '' })
    navigate('/')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input
            type="email"
            className="input"
            onChange={handleChange}
            name="email"
            required
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            className="input"
            type="password"
            onChange={handleChange}
            name="password"
            required
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}
export default Login
