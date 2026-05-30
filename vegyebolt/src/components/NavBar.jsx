import { NavLink } from "react-router"
import classes from "./NavBar.module.css"
const NavBar = () => {
    return (
        <nav>
            <NavLink to='/' className={({isActive}) =>isActive ? classes.active:classes.link}>Listanézet</NavLink>
            <NavLink to='form' className={({isActive}) =>isActive ? classes.active:classes.link}>Új vásárlás</NavLink>
        </nav>
    )
}
export default NavBar