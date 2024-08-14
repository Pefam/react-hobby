import { Link, Outlet } from "react-router-dom"
export default function TeacherLayout() {
    return (
        <>
        <nav className="teacher-nav">
            <Link to="/teacher">Dashboard</Link>
            <Link to="/teacher/income">Income</Link>
            <Link to="/teacher/reviews">Reviews</Link>

        </nav>
        <Outlet />
        </>
    )
}