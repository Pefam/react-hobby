import { Link, NavLink } from "react-router-dom"

export default function Header() {
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
                    >Hobbies</NavLink>
            </nav>
        </header>
    )
}