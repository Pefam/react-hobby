import { NavLink, Outlet } from "react-router-dom"
export default function TeacherLayout() {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
        <nav className="teacher-nav">
                <NavLink
                    to="."
                    end
                    style={({isActive}) => isActive ? activeStyles : null}
                >Dashboard</NavLink>
                <NavLink
                    to="income"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >Income</NavLink>
                <NavLink
                    to="hobbies"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Hobbies
                </NavLink>
                <NavLink 
                to="reviews"
                    style={({isActive}) => isActive ? activeStyles : null}
                >Reviews</NavLink>
        </nav>
        <Outlet />
        </>
    )
}