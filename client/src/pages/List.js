import Client from '../services/api'
import { useEffect, useState, useParams } from 'react'
import ListCard from '../components/listCard'

const List = ({ user }) => {
  const listId = useParams()
  const initial = {
    username: '',
    list: ''
  }
  const [lists, setList] = useState({ username: '', lists: '' })
  const [formValues, setFormValues] = useState(initial)

  const handleSubmit = async () => {
    await Client.post('/list', { formValues })
    setFormValues(formValues)
  }

  useEffect(async () => {
    const res = await Client.post(`/list/${listId}`)
    setList(res.data)
  })

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
          <label>username</label>
          <input
            type="username"
            onChange={handleChange}
            name="username"
            required
          />
        </div>
        <div className="input-container">
          <label>List </label>
          <input type="list" onChange={handleChange} name="list" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <div>
        {lists.map((list) => (
          <ListCard
            id={list?.id}
            key={list?.id}
            username={list?.username}
            list={list?.list}
          />
        ))}
      </div>
    </div>
  )
}

export default List
