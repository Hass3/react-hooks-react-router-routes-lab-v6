import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
    <NavLink 
    to="/"
    className="nav-link">
      Home
    </NavLink>
    <NavLink 
    to="/directors"
    className="nav-link">
      Directors
    </NavLink>
    <NavLink 
    to="/actors"
    className="nav-link">
      Actors
    </NavLink>,
    </nav>
    );
};

export default NavBar;
/**NavBar
This component needs to render three NavLink components. They will be for /, /directors, 
and /actors, in this order (test checks for this). The NavLink for / should render Home, 
directors should render Directors, and actors should render Actors. Each page should render the NavBa */