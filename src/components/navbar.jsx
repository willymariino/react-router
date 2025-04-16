import {NavLink} from "react-router-dom"

function Navbar(){
return(
    <ul>
        <li> <NavLink to="/Homepage">Home Page</NavLink> </li>
        <li> <NavLink to="/About">Chi Siamo</NavLink> </li>
        <li> <NavLink to="/Lista-post">lista posts</NavLink> </li>
    </ul>


)
}

export default Navbar