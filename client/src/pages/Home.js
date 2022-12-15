import { useState, useEffect } from 'react'
import Client from '../services/api'

import ListGenerator from '../components/ListGenerator'
import List from './List'

const Home = () => {
  const [user, setUsers] = useState([])

  const handleClick = async (data, id) => {
    const res = await Client.get('/user')
    setUsers(res.data)
  }
  return (
    <div>
      <h2 className="">Welcome to Santa Wishlist!</h2>
      <h3>Pick a Name</h3>
      <button onClick={handleClick}></button>
      {user?.map((res) => (
        <ListGenerator
          id={res?.id}
          handleClick={handleClick}
          user={res?.user}
          username={res?.username}
        />
      ))}
    </div>
  )
}
export default Home
