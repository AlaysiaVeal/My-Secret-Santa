import { Link } from "react-router-dom";
const Nav = ({authenticated, user, handleLogOut}) => {
  let authentication
  if (user) {
    authentication = (
      <nav className="nav">
        <h2 className="intro">Welcome <Link to='/profile' className="intro">{user?.email}</Link></h2>
        <Link to="/"className="home">Home</Link>
        <Link to="/about" className="about">about</Link>
        <Link to="/list" className="login">List</Link>
        <Link id="logout" className="login" onClick={handleLogOut} to='/'>Log Out</Link>
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
      </nav>
    </div>
  )
}
export default Nav