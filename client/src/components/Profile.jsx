import { useNavigate } from "react-router-dom"
import Client from "../services/api"
import { useState } from "react"



const Profile = ({user}) => {
  const navigate = useNavigate()
  const initial = {
    userId: parseInt(user?.id),
    username: '',
    password: '',
  }
  const [form, setForm] = useState(initial)

  const [edit, setEdit] = useState(initial)

  const handleEdit = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value })
  }
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleSubmit = async(e,id) => {
    e.preventDefault()
    const data = {
      userId: parseInt(form.userId),
      ...form
    }
    const res = await Client.put(`/user/login/${user.id}`, data)
    console.log(res.data)
  }
  const handleEditSubmit = async (e, id) => {
    /* const editButtonRef = editButton.current
    const textarea = ref.current
    const submitEdit = submitEditRef.current
    textarea.readOnly = true
    textarea.className = 'reviewArea'
    submitEdit.className = 'hiddenButton'
    editButtonRef.className = '' */
    e.preventDefault()
    await Client.put(`/users/password/${id}`)
    navigate('/profile')
  }
  return (
    <div>
      <h2>edit profile</h2>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input
        type="text"
        onChange={handleChange}
        name="username"
        />
        <label>password</label>
        <input
        type="text"
        onChange={handleChange}
        name="password"
        />
        <button></button>
      </form>
    </div>
  )
}
export default Profile