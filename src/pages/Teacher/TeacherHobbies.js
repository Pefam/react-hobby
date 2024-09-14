import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getTeacherHobbies } from "../../api"

export function loader() {
    return getTeacherHobbies()
}

export default function TeacherHobbies() {
    //const [hobbies, setHobbies] = React.useState([])
    //const [loading, setLoading] = React.useState(false)
    const hobbies = useLoaderData()
    //const [error, setError] = React.useState(null)
    /*
    React.useEffect(() => {
        async function loadHobbies() {
            setLoading(true)
            try {
                const data = await getTeacherHobbies()
                setHobbies(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadHobbies()
    }, [])
    */

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