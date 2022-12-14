import Client from '../services/api'
import { useEffect, useState } from 'react'
import ListCard from '../components/listCard'
import { useNavigate, useParams } from 'react-router-dom'

const List = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const userId = useParams()
  const initial = {
    userId: parseInt(user?.id),
    username: '',
    list: ''
  }
  const [lists, setList] = useState([])
  let [formValues, setFormValues] = useState(initial)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newData = {
      userId: parseInt(formValues.userId),
      ...formValues
    }
    const payload = await Client.post('/list', newData)
    console.log(formValues)
    setFormValues(payload)
  }

  const getList = async () => {
    const res = await Client.get('/list/')
    setList(res.data)
    navigate('/')
  }

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
      /* userId: user.id */
    })
  }

  return user && authenticated ? (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>username</label>
          <input type="username" onChange={handleChange} name="username" />
        </div>
        <div className="input-container">
          <label>Item 1 </label>
          <input type="list" onChange={handleChange} name="list" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <div>
        {lists?.map((list) => (
          <ListCard
            id={user?.id}
            key={list?.id}
            username={list?.username}
            item={list?.items}
          />
        ))}
      </div>
    </div>
  ) : (
    <h2>Login to create a list</h2>
  )
}

export default List
