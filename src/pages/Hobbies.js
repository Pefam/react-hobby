import React from "react"
export default function Hobbies() {
    const [hobbies, setHobbies] = React.useState([])

    React.useEffect(() => {
        fetch("/api/hobbies")
            .then(res => res.json())
            .then(data => setHobbies(data.hobbies))
    }, [])

    const hobbyElements = hobbies.map(hobby => (
        <div key={hobby.id} className="hobby-tile">
            <img src={hobby.imageUrl} />
            <div className="hobby-info">
                <h3>{hobby.name}</h3>
                <p>${hobby.price}<span>/day</span></p>
            </div>
            <i className={`hobby-type ${hobby.type} selected`}>{hobby.type}</i>
        </div>
    ))

    return (
        <div className="hobby-list-container">
            <h1>Explore our van options</h1>
            <div className="hobby-list">
                {hobbyElements}
            </div>
        </div>
    )
}