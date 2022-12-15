import { useState, useEffect } from 'react'
import Client from '../services/api'

import ListGenerator from '../components/ListGenerator'

const Home = () => {
  const [user, setUsers] = useState([])
  const handleClick = async (obj) => {
    const res = await Client.get('/user')
    const keys = Object.keys(res.data)
    setUsers(Math.floor(Math.random() * keys.length))
  }
  return (
    <div>
      <h2>Welcome</h2>
      {user?.map((res) => (
        <ListGenerator
          id={res?.id}
          handleClick={handleClick}
          user={res?.user}
          username={res?.username}
        />
      ))}
      <ListGenerator handleClick={handleClick} user={user} />
    </div>
  )
}
export default Home
