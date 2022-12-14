import { useEffect } from "react"

const List = () => {
  const [list, setList] = useState('')
  useEffect(async() => {
      const res = await Client.get(`/list/${id}`)
      console.log(data)
      setList(res.data)
  })
  return (
    <div>
      {list.map((list)=> (
      <div key={list.id}>
          <h2>{list.name}</h2>
          <h3>{list.list}</h3>
      </div>
      ))}
    </div>
  )
}
export default List