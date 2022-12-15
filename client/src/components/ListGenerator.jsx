import { useState } from "react"
import Client from "../services/api"

const ListGenerator = ({ username, id}) => {
  return (
    <div>
          <div key={id}>
          <h3>{username}</h3>
          </div>
    </div>
    )
}
export default ListGenerator