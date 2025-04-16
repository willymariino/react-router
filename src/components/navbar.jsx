import {NavLink} from "react-router-dom"

function Navbar(){
return(
    <ul>
        <li> <NavLink to="/homepage" className="nav-link" >Home Page</NavLink> </li>
        <li> <NavLink to="/about" className="nav-link">Chi Siamo</NavLink> </li>
        <li> <NavLink to="/lista-post" className="nav-link">lista posts</NavLink> </li>
    </ul>


)
}

export default Navbar