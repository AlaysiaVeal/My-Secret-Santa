import { useEffect,useState } from "react"
import Client from "../services/api"

const ListCard = ({list, id, handleDelete,handleEdit}) => {
  return (
    <div>
      <div key={id}>
        <textarea
        defaultValue={list}
        >
        </textarea>
          <button onClick={() => handleDelete(id)}>delete</button>
          <button onClick={(e) => handleEdit(e,id)}>edit</button>
      </div>
    </div>
  )
}
export default ListCard