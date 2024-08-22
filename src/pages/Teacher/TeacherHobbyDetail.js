import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import { getTeacherHobbies } from "../../api"
export default function TeacherHobbyDetail() {
    const [currentHobby, setCurrentHobby] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()

    React.useEffect(() => {
        async function loadHobbies() {
            setLoading(true)
            try {
                const data = await getTeacherHobbies(id)
                setCurrentHobby(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadHobbies()
    }, [id])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all hobbies</span></Link>

            <div className="teacher-hobby-detail-layout-container">
                <div className="teacher-hobby-detail">
                    <img src={currentHobby.imageUrl} alt={currentHobby.name} />
                    <div className="teacher-hobby-detail-info-text">
                        <i
                            className={`hobby-type hobby-type-${currentHobby.type}`}
                        >
                            {currentHobby.type}
                        </i>
                        <h3>{currentHobby.name}</h3>
                        <h4>${currentHobby.price}/day</h4>
                    </div>
                </div>

                <nav className="teacher-hobby-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>

                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>

                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>

                </nav>

                <Outlet context={{ currentHobby }} />
            </div>
        </section>
    )
}