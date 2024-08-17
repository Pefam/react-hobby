import { useOutletContext } from "react-router-dom"
export default function HostVanPricing() {
    const { currentHobby } = useOutletContext()
    return (
        <h3 className="teacher-hobby-price">${currentHobby.price}<span>/day</span></h3>
    )
}