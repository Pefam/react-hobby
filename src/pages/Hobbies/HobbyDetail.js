import React from "react"
import { Link, useLocation, useLoaderData, defer, Await } from "react-router-dom"
import { getHobby } from "../../api"

export async function loader({ params }) {
    return defer({ hobby: getHobby(params.id) })
}
export default function HobbyDetail() {
    const location = useLocation()
    const dataPromise = useLoaderData()

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    function renderhobbylement(hobby) {
        return (
            <div className="hobby-detail">
                <img src={hobby.imageUrl} alt={hobby.name} />
                <i className={`hobby-type ${hobby.type} selected`}>{hobby.type}</i>
                <h2>{hobby.name}</h2>
                <p className="hobby-price"><span>${hobby.price}</span>/day</p>
                <p>{hobby.description}</p>
                <button className="link-button">Do this hobby</button>
            </div>
        )
    }

    return (
        <div className="hobby-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} hobbies</span></Link>
            <React.Suspense fallback={<h2>Loading hobby...</h2>}>
                <Await resolve={dataPromise.hobby}>
                    {renderhobbylement}
                </Await>
            </React.Suspense>
        </div>
    )
}