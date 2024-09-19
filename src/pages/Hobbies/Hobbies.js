import React from "react"
import {
    Link,
    useSearchParams,
    useLoaderData,
    defer,
    Await
} from "react-router-dom"
import { getHobbies } from "../../api"

export function loader() {
    return defer ({ hobbies: getHobbies()})
}
export default function Hobbies() {
    const [searchParams, setSearchParams] = useSearchParams()
    const dataPromise = useLoaderData()

    const typeFilter = searchParams.get("type")

    

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    function renderHobbyElements(hobbies) {


        const displayedHobbies = typeFilter
            ? hobbies.filter(hobby => hobby.type === typeFilter)
            : hobbies

        const hobbyElements = displayedHobbies.map(hobby => (
            <div key={hobby.id} className="hobby-tile">
                <Link to={hobby.id} state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}>
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
            <>
                <div className="hobby-list-filter-buttons">

                    <button
                        onClick={() => handleFilterChange("type", "creative")}
                        className={
                            `hobby-type creative ${typeFilter === "creative" ? "selected" : ""}`
                        }>
                        Creative
                    </button>
                    <button
                        onClick={() => handleFilterChange("type", "outdoor")}
                        className={
                            `hobby-type outdoor ${typeFilter === "outdoor" ? "selected" : ""}`
                        }>
                        Outdoor
                    </button>
                    <button
                        onClick={() => handleFilterChange("type", "culinary")}
                        className={
                            `hobby-type culinary ${typeFilter === "culinary" ? "selected" : ""}`
                        }>
                        Culinary
                    </button>

                    {typeFilter ? (
                        <button
                            onClick={() => setSearchParams({})}
                            className="hobby-type clear-filters">
                            Clear filter
                        </button>
                    ) : null}

                </div>

                <div className="hobby-list">
                    {hobbyElements}
                </div>
            </>
        )

    }

    return (
        <div className="hobby-list-container">
            <h1>Explore our hobby options</h1>
            <React.Suspense fallback={<h2>Loading hobbies...</h2>}>
                <Await resolve={dataPromise.hobbies}>
                    {renderHobbyElements}
                </Await>
            </React.Suspense>
        </div>
    )
}