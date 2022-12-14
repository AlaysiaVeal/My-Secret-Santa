import Client from '../services/api'
import { useState } from 'react'

const List = ({ user }) => {
  const initial = {
    name: '',
    list: ''
  }
  const [formValues, setFormValues] = useState(initial)

  const handleSubmit = async () => {
    await Client.post('/list', { formValues })
    setFormValues(formValues)
  }

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
      userId: user.id
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>name</label>
          <input type="name" onChange={handleChange} name="name" required />
        </div>
        <div className="input-container">
          <label>List </label>
          <input type="list" onChange={handleChange} name="list" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <div></div>
    </div>
  )
}

export default List
