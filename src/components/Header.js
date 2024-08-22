import Avatar from "../assets/images/avatar-icon.png"
import { Link, NavLink } from "react-router-dom"

export default function Header() {

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return (
        <header>
            <Link className="site-logo" to="/">#HOBBIES</Link>
            <nav>
                <NavLink
                    to="/teacher"
                    className={({ isActive }) => isActive ? "active-link" : null}
                >Teacher</NavLink>
                <NavLink
                    to="/about"
                    className={({isActive}) => isActive ? "active-link" : null}
                    >About</NavLink>
                <NavLink
                    to="/hobbies"
                    className={({isActive}) => isActive ? "active-link" : null}
                    >Hobbies
                </NavLink>
                <Link to="login" className="login-link">
                    <img
                        src={Avatar}
                        className="login-icon"
                        alt="Avatar"
                    />
                </Link>
                <button onClick={fakeLogOut}>X</button>
            </nav>
        </header>
    )
}