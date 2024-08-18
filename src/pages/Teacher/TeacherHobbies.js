import React from "react"
import { Link } from "react-router-dom"

export default function TeacherHobbies() {
    const [hobbies, setHobbies] = React.useState([])

    React.useEffect(() => {
        fetch("/api/teacher/hobbies")
            .then(res => res.json())
            .then(data => setHobbies(data.hobbies))
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