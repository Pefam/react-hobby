import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link className="site-logo" to="/">#HOBBIES</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/hobbies">Hobbies</Link>
            </nav>
        </header>
    )
}