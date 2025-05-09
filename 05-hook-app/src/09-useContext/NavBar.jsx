import { Link, NavLink } from "react-router-dom"



export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">useContext</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink className={"nav-link"} to="/">
                Home
              </NavLink>
              <NavLink className={"nav-link"} to="/about">
                About
              </NavLink>
              <NavLink className={"nav-link" } to="/login">
                Login
              </NavLink>
            </ul>
          </div>
      </div>
   </nav>
  )
}
