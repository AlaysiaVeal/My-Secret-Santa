import { useEffect,useState } from "react"
import Client from "../services/api"

const ListCard = ({list, id, handleDelete}) => {
 /* const [lists, setLists] = useState('') 
  useEffect(async() => {
      const res = await Client.get(`/list/${id}`)
      setLists(res.data)
  }) */
  return (
    <div>
      <div key={id}>
          <h3>{list}</h3>
          <button onClick={() => handleDelete(id)}></button>
      </div>
    {/*   ))} */}
    </div>
  )
}
export default ListCard