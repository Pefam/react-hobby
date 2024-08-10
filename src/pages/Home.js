import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>You got the free time, we got the perfect hobbies.</h1>
            <p>Add creativity to your life by exploring new hobbies. Find the perfect hobby kit to start your next adventure.</p>
            <Link to="/hobbies">Discover your hobby</Link>

        </div>
    )
};