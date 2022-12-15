import { useState, useEffect } from 'react'
import Client from '../services/api'

import ListGenerator from '../components/ListGenerator'

const Home = () => {
  const [user, setUsers] = useState([])
  const handleClick = async () => {
    const res = await Client.get('/user')
    setUsers(res.data)
  }

  const random = () => {}

  return (
    <div>
      <h2>Welcome</h2>
      <ListGenerator handleClick={handleClick} user={user} />
    </div>
  )
}
export default Home
