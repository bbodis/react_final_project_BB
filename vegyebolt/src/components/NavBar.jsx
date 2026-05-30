import { NavLink } from "react-router"
import { useAuth } from "../context/loginContext"
import classes from "./NavBar.module.css"
const NavBar = () => {
    const {isLogged, logout} = useAuth()
    return (
        <nav>
            <NavLink to='/' className={({isActive}) =>isActive ? classes.active:classes.link}>Listanézet</NavLink>
            {isLogged && <NavLink to='form' className={({isActive}) =>isActive ? classes.active:classes.link}>Új vásárlás</NavLink>}
             {!isLogged ? <NavLink to='login' className={({isActive}) =>isActive ? classes.active : classes.link}>Bejelentkezés</NavLink> : <a onClick={logout} className={classes.isActive}>Kijelentkezés</a>}
        </nav>
    )
}
export default NavBar