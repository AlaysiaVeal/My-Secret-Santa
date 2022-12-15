import { useState } from "react"
import Client from "../services/api"

const ListGenerator = ({ user,handleClick}) => {
  const [authenticated, toggleAuthenticated] = useState(false)
  return (
    <div>
      <button onClick={handleClick}></button>
    {user.map((res) => {
      return  (
          <div key={res?.id}>
          <h3>{res?.username}</h3>
          </div>
      )
      }
      )}
    </div>
    )
}
export default ListGenerator