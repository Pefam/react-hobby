import React from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import { getHobbies } from "../../api"
//params = id
export default function HobbyDetail() {
    const [hobby, setHobby] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()
    const location = useLocation()

    React.useEffect(() => {
        async function loadHobbies() {
            setLoading(true)
            try {
                const data = await getHobbies(id)
                setHobby(data)
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

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <div className="hobby-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} hobbies</span></Link>
            {hobby ? (
                <div className="hobby-detail">
                    <img src={hobby.imageUrl} alt={hobby.name} />
                    <i className={`hobby-type ${hobby.type} selected`}>{hobby.type}</i>
                    <h2>{hobby.name}</h2>
                    <p className="hobby-price"><span>${hobby.price}</span>/day</p>
                    <p>{hobby.description}</p>
                    <button className="link-button">Do this hobby</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}