import React from "react"
import { Link } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"
import { getTeacherHobbies } from "../../api"

export default function Dashboard() {
    const [hobbies, setHobbies] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    React.useEffect(() => {
        setLoading(true)
        getTeacherHobbies()
            .then(data => setHobbies(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    function renderHobbyElements(hobbies) {
        const teacherHobbiesEls = hobbies.map((hobby) => (
            <div className="teacher-hobby-single" key={hobby.id}>
                <img src={hobby.imageUrl} alt={`${hobby.name}`} />
                <div className="teacher-hobby-info">
                    <h3>{hobby.name}</h3>
                    <p>${hobby.price}/day</p>
                </div>
                <Link to={`hobbies/${hobby.id}`}>View</Link>
            </div>
        ))

        return (
            <div className="teacher-hobbies-list">
                <section>{teacherHobbiesEls}</section>
            </div>
        )
    }

    if (error) {
        return <h1>Error: {error.message}</h1>
    }

    return (
        <>
            <section className="teacher-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </section>
            <section className="teacher-dashboard-reviews">
                <h2>Review score</h2>

                <BsStarFill className="star" />

                <p>
                    <span>5.0</span>/5
                </p>
                <Link to="reviews">Details</Link>
            </section>
            <section className="teacher-dashboard-hobies">
                <div className="top">
                    <h2>Your listed hobbies</h2>
                    <Link to="hobbies">View all</Link>
                </div>
                {
                    loading && !hobbies
                        ? <h1>Loading...</h1>
                        : (
                            <>
                                {renderHobbyElements(hobbies)}
                            </>
                        )
                }
            </section>
        </>
    )
}
