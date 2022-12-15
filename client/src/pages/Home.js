import { useState, useEffect } from 'react'
import Client from '../services/api'

import ListGenerator from '../components/ListGenerator'

const Home = () => {
  const [user, setUsers] = useState([])

  const handleClick = async (data, id) => {
    const res = await Client.get('/user')
    /*  let sortedUsers = []
    res.data.forEach((user) => {
      if (res.data.id === user.id) {
        console.log(user)
      }
    }) */
    setUsers(res.data)
  }
  return (
    <div>
      <h2 className="">Welcome to Santa Wishlist!</h2>
      <h3>Pick a Name</h3>
      <button onClick={handleClick}></button>
      {user?.map((res) => (
        <ListGenerator
          id={res[10]?.id}
          handleClick={handleClick}
          username={res[10]?.username}
          key={res?.id}
        />
      ))}
    </div>
  )
}
export default Home
