import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Hobbies() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [hobbies, setHobbies] = React.useState([])


    const typeFilter = searchParams.get("type")
    console.log(typeFilter)

    React.useEffect(() => {
        fetch("/api/hobbies")
            .then(res => res.json())
            .then(data => setHobbies(data.hobbies))
    }, [])

    const displayedHobbies = typeFilter
        ? hobbies.filter(hobby => hobby.type === typeFilter)
        : hobbies

    const hobbyElements = displayedHobbies.map(hobby => (
        <div key={hobby.id} className="hobby-tile">
            <Link to={`/hobbies/${hobby.id}`}>
                <img src={hobby.imageUrl} alt={hobby.name} />
                <div className="hobby-info">
                    <h3>{hobby.name}</h3>
                    <p>${hobby.price}<span>/day</span></p>
                </div>
                <i className={`hobby-type ${hobby.type} selected`}>{hobby.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="hobby-list-container">
            <h1>Explore our hobby options</h1>
            <div className="hobby-list">
                {hobbyElements}
            </div>
        </div>
    )
}