import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
export default function TeacherHobbyDetail() {
    const { id } = useParams()
    const [currentHobby, setCurrentHobby] = React.useState(null)

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    React.useEffect(() => {
        fetch(`/api/teacher/hobbies/${id}`)
            .then(res => res.json())
            .then(data => setCurrentHobby(data.hobbies))
    })

    if (!currentHobby) {
        return <h1>Loading...</h1>
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

                <Outlet />
            </div>
        </section>
    )
}