import { useState } from "react"
import Client from "../services/api"
import { Link } from "react-router-dom"

const ListGenerator = ({ username, id}) => {
  return (
    <div className="Home">
          <div key={id}>
            <Link to={`/list`}>
          <h3>{username}</h3>
          </Link>
          </div>
    </div>
    )
}
export default ListGenerator