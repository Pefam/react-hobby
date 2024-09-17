import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getTeacherHobbies } from "../../api"
import { requireAuth } from "../../utils"

export async function loader({ request }) {
    console.log("is it this one?")
    await requireAuth({ request })
    return getTeacherHobbies()
}

export default function TeacherHobbies() {
    const hobbies = useLoaderData()

    const teacherHobbiesEls = hobbies.map(hobby => (
        <Link
            to={hobby.id}
            key={hobby.id}
            className="teacher-hobby-link-wrapper"
        >
            <div className="teacher-hobby-single" key={hobby.id}>
                <img src={hobby.imageUrl} alt={hobby.name} />
                <div className="teacher-hobby-info">
                    <h3>{hobby.name}</h3>
                    <p>${hobby.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="teacher-hobbies-title">Your listed hobbies</h1>
            <div className="teacher-hobbies-list">
                <section>
                    {teacherHobbiesEls}
                </section>
            </div>
        </section>
    )
}