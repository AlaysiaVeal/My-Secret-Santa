import { useEffect,useState } from "react"
import Client from "../services/api"

const ListCard = ({username, list, id}) => {
 const [lists, setLists] = useState('') 
  useEffect(async() => {
      const res = await Client.get(`/list/${id}`)
      setLists(res.data)
  })
  return (
    <div>
      {/* {lists.map((list)=> ( */}
      <div key={id}>
          <h2>{username}</h2>
          <h3>{list}</h3>
      </div>
    {/*   ))} */}
    </div>
  )
}
export default ListCard