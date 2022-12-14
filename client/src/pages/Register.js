import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const initialFormValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialFormValues)
  const [pass, setPass] = useState('right')

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formValues.password === formValues.confirmPassword) {
      await RegisterUser({
        email: formValues.email,
        username: formValues.username,
        password: formValues.password
        /* confirmPassword: formValues.password */
      })

      setPass('right')
      setFormValues(initialFormValues)
      navigate('/login')
    } else {
      setPass('wrong')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formValues.email}
            placeholder="email"
            required
          ></input>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            onChange={handleChange}
            value={formValues.username}
            placeholder="username"
            name="username"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            onChange={handleChange}
            value={formValues.password}
            placeholder="password"
            name="password"
            required
          />
          <label>Confirm Password: </label>
          <input
            type="password"
            onChange={handleChange}
            value={formValues.confirmPassword}
            placeholder="password"
            name="confirmPassword"
            required
          />
          {/* <p className={pass}>Passwords are not the same</p> */}
        </div>
        <div className="button-container">
          <button
            type="submit"
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Submit
          </button>
          <Link to="/login">
            <h3>Already signed in? Login here</h3>
          </Link>
        </div>
      </form>
    </div>
  )
}
export default Register
