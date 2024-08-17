import { useOutletContext } from "react-router-dom"
export default function HostVanPhotos() {
    const { currentHobby } = useOutletContext()
    return (
        <img src={currentHobby.imageUrl} alt={currentHobby.name} className="teacher-hobby-detail-image" />
    )
}