import React from "react"
import { Link } from "react-router-dom"
import { getTeacherHobbies } from "../../api"

export default function TeacherHobbies() {
    console.log('teacher hobbies')
    const [hobbies, setHobbies] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

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

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <section>
            <h1 className="teacher-hobbies-title">Your listed hobbies</h1>
            <div className="teacher-hobbies-list">
                {
                    hobbies.length > 0 ? (
                        <section>
                            {teacherHobbiesEls}
                        </section>

                    ) : (
                        <h2>Loading...</h2>
                    )
                }
            </div>
        </section>
    )
}