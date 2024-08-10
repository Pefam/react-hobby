import React from "react"
import bgImg from "../assets/images/about-hero.png"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Why settle for one hobby when you can explore them all?</h1>
                <p>Our mission is to ignite your passion with the perfect hobby kit. Each kit is carefully curated and recertified before reaching you, ensuring your creative journey begins without any hurdles. (Extra supplies sold separately)</p>
                <p>Our team is filled with hobby enthusiasts who understand the joy of diving into new activities and mastering them.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your next passion is waiting.<br />Your hobby kit is ready.</h2>
                <Link className="link-button" to="/hobbies">Explore our hobby kits</Link>
            </div>
        </div>
    );
}