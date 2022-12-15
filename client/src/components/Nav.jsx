import { Link } from "react-router-dom";
const Nav = ({authenticated, user, handleLogOut}) => {
  let authentication
  if (user) {
    authentication = (
      <nav className="nav">
        <h2>Welcome <Link to='/profile'>{user?.email}</Link></h2>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/list">List</Link>
        <Link id="logout" onClick={handleLogOut} to='/'>Log Out</Link>
      </nav>
    )
  }
  let unauthenticatedOptions = (
    <nav>
        <Link to='/' className="home">Home</Link>
        <Link to='/about' className="about">About</Link>
        <Link to='/login' className="about">Login</Link>
        <Link to='/register' className="about">Register</Link>
      </nav>
  )
  return (
    <div className="nav">
      <nav>
        {authenticated && user ? authentication : unauthenticatedOptions}
        {/*  <Link to='/' className="home">Home</Link>
        <Link to='/about' className="about">About</Link> */}
        {/* <Link to='/list' className="about">List</Link> */}
      </nav>
    </div>
  )
}
export default Nav