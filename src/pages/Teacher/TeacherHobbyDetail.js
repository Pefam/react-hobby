import React from "react"
import { Link, NavLink, Outlet, useLoaderData, Await, defer } from "react-router-dom"
import { getHobby } from "../../api"
import { requireAuth } from "../../utils"

export async function loader({ params, request }) {
    await requireAuth({ request })
    return defer({ currentHobby: getHobby(params.id) })
}
export default function TeacherHobbyDetail() {
    const dataPromise = useLoaderData()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function renderHobbyElement(currentHobby) {
       return (
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
        )

    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all hobbies</span></Link>
            <React.Suspense fallback={<h2>Loading hobby...</h2>}>
                <Await resolve={dataPromise.currentHobby}>
                    {renderHobbyElement}
                </Await>
            </React.Suspense>
        </section>
    )
}