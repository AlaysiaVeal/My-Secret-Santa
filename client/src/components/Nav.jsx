import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <nav>
        <Link to='/' className="home">Home</Link>
        <Link to='/about' className="about">About</Link>
        <Link to='/list' className="about">List</Link>
      </nav>
    </div>
  )
}
export default Nav