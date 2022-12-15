import { useEffect,useState } from "react"
import Client from "../services/api"

const ListCard = ({list, id}) => {
 /* const [lists, setLists] = useState('') 
  useEffect(async() => {
      const res = await Client.get(`/list/${id}`)
      setLists(res.data)
  }) */
  return (
    <div>
      <div key={id}>
          <h3>{list}</h3>
      </div>
    {/*   ))} */}
    </div>
  )
}
export default ListCard