import { useOutletContext } from "react-router-dom"
export default function HostVanInfo() {
    const { currentHobby } = useOutletContext()
    return (
        <section className="teacher-hobby-detail-info">
            <h4>Name: {currentHobby.name}</h4>
            <h4>Category: {currentHobby.type}</h4>
            <h4>Description: {currentHobby.description}</h4>
            <h4>Visibility: public</h4>
        </section>
    )
}