import React from "react"
import { Link, useLocation, useLoaderData } from "react-router-dom"
import { getHobby } from "../../api"

export async function loader({ params }) {
    return getHobby(params.id)
}
export default function HobbyDetail() {
    const location = useLocation()
    const hobby = useLoaderData()

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <div className="hobby-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} hobbies</span></Link>
                <div className="hobby-detail">
                    <img src={hobby.imageUrl} alt={hobby.name} />
                    <i className={`hobby-type ${hobby.type} selected`}>{hobby.type}</i>
                    <h2>{hobby.name}</h2>
                    <p className="hobby-price"><span>${hobby.price}</span>/day</p>
                    <p>{hobby.description}</p>
                    <button className="link-button">Do this hobby</button>
                </div>
        </div>
    )
}