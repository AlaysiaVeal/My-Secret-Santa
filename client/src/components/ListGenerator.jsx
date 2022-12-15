import { useState } from "react"
import Client from "../services/api"

const ListGenerator = ({ user,handleClick, username, id}) => {
  const [authenticated, toggleAuthenticated] = useState(false)
  return (
    <div>
      <button onClick={handleClick}></button>
          <div key={id}>
          <h3>{username}</h3>
          </div>
    </div>
    )
}
export default ListGenerator