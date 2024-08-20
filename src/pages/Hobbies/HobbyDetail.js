import React from "react"
import { useParams, Link, useLocation } from "react-router-dom"

export default function HobbyDetail() {
    const params = useParams()
    const location = useLocation()
    const [hobby, setHobby] = React.useState(null)
    React.useEffect(() => {
        fetch(`/api/hobbies/${params.id}`)
            .then(res => res.json())
            .then(data => setHobby(data.hobbies))
    }, [params.id])

    const search = location.state?.search || ""

    return (
        <div className="hobby-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to all hobbies</span></Link>
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