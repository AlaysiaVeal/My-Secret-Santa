import { useState } from "react"
import Client from "../services/api"

const ListGenerator = ({ username, id}) => {
  return (
    <div className="Home">
          <div key={id}>
          <h3>{username}</h3>
          </div>
    </div>
    )
}
export default ListGenerator