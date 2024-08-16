import React from "react"
import { useParams } from "react-router-dom"
export default function TeacherHobbiesDetail() {
    const { id } = useParams()
    const [currentHobby, setCurrentHobby] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/teacher/hobbies/${id}`)
            .then(res => res.json())
            .then(data => setCurrentHobby(data.hobbies))
    }, [])

    if (!currentHobby) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <img src={currentHobby.imageUrl} alt={currentHobby.name} width={150} />
            <h2>{currentHobby.name}</h2>
            <p>{currentHobby.price}</p>
            <p>{currentHobby.type}</p>
        </div>
    )
}