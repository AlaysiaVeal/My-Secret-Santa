import Client from '../services/api'
import { useEffect, useState, useRef } from 'react'
import ListCard from '../components/listCard'
import { useNavigate, useParams } from 'react-router-dom'

const List = ({ user, authenticated }) => {
  const initialEdit = {
    list: ''
  }
  const ref = useRef(initialEdit)
  const [list, editList] = useState(initialEdit)

  const [lists, setList] = useState([])

  const initial = {
    userId: parseInt(user?.id),
    username: '',
    list: ''
  }

  let [formValues, setFormValues] = useState(initial)

  const getList = async () => {
    const res = await Client.get(`/list/`)
    let sortedLists = []
    res.data.forEach((list) => {
      if (list.userId === user.id) {
        sortedLists.push(list)
      }
    })
    setList(sortedLists)
  }

  useEffect(() => {
    getList()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newData = {
      userId: parseInt(formValues.userId),
      ...formValues
    }
    const payload = await Client.post('/list', newData)
    setFormValues(payload)
    getList()
  }
  const handleDelete = async (id) => {
    await Client.delete(`/list/${id}`)
    getList()
  }

  const handleEdit = async (e, id) => {
    e.preventDefault()
    const textarea = ref.current
    await Client.put(`/list/${id}`, editList)
    getList()
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
        <h2>My Christmas List</h2>
        {lists?.map((list) => (
          <ListCard
            id={list?.id}
            key={list?.id}
            username={list?.username}
            list={list?.list}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  ) : (
    <h2>Login to create a list</h2>
  )
}

export default List
