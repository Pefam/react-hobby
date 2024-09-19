import React from "react"
import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { getTeacherHobbies } from "../../api"
import { requireAuth } from "../../utils"

export async function loader({ request }) {
    await requireAuth({ request })
    return defer({ hobbies: getTeacherHobbies() })
}

export default function TeacherHobbies() {
    const dataPromise = useLoaderData()

    function renderHobbyElements(hobbies) {
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
            < div className="teacher-hobbies-list" >
                <section>
                    {teacherHobbiesEls}
                </section>
            </div >
        )
    }

    

    return (
        <section>
            <h1 className="teacher-hobbies-title">Your listed hobbies</h1>
            <React.Suspense fallback={<h2>Loading hobbies...</h2>}>
                <Await resolve={dataPromise.hobbies}>
                    {renderHobbyElements}
                </Await>
            </React.Suspense>
        </section>
    )
}