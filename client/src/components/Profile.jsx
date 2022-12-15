import { useNavigate } from "react-router-dom"
import Client from "../services/api"
import { useState } from "react"



const Profile = () => {
  const navigate = useNavigate()
  const initial = {
    username: '',
    password: '',
    confirmPassword: ''
  }
  const [form, setForm] = useState(initial)

  const [edit, setEdit] = useState(initial)
  
  const handleEdit = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value })
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
    await Client.put(`/user/${id}`)
    navigate('/profile')
  }
  return (
    <div>
      <h2>edit profile</h2>
      <form>
        <label>username</label>
        <input/>
        <label>password</label>
        <input/>
        <label>confirm password</label>
        <input></input>
      </form>
    </div>
  )
}
export default Profile