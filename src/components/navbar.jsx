import {NavLink} from "react-router-dom"

function Navbar(){
return(
    <ul>
        <li> <NavLink to="/homepage">Home Page</NavLink> </li>
        <li> <NavLink to="/about">Chi Siamo</NavLink> </li>
        <li> <NavLink to="/lista-post">lista posts</NavLink> </li>
    </ul>


)
}

export default Navbar