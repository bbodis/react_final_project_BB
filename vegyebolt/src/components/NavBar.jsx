import { NavLink } from "react-router"
import { useAuth } from "../context/loginContext"
import classes from "./NavBar.module.css"

const NavBar = () => {
    const { isLogged, logout } = useAuth()
    return (
        <nav className={classes.navbar}>
            <div className={classes.spacer}></div>
            <div className={classes.items}>
                <NavLink to='/' className={({ isActive }) => isActive ? classes.active : classes.link}>Listanézet</NavLink>
                {isLogged && <NavLink to='form' className={({ isActive }) => isActive ? classes.active : classes.link}>Új vásárlás</NavLink>}
            </div>
            <div className={classes.login}>
                {!isLogged ? (<NavLink to='login' className={({ isActive }) => isActive ? classes.active : classes.link}>Bejelentkezés</NavLink>) : (<a onClick={logout} className={classes.link} style={{ cursor: 'pointer' }}>Kijelentkezés</a>)}
            </div>
        </nav>
    )
}
export default NavBar