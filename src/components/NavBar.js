import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav>
        <h1>this is the navbar</h1>
        <NavLink to="/">Home </NavLink> | <NavLink to="/apartments">All Apartments</NavLink> | 
        <NavLink to="/apartments/create">Create Apartment</NavLink>
      </nav>
    )
}

export default NavBar;