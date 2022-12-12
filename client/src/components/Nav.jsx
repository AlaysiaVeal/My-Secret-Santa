import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <nav>
        <Link to='/' className="home">Home</Link>
        <Link to='/about' className="about">About</Link>
      </nav>
    </div>
  )
}
export default Nav