import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1 className="hero-text">create a professional resume for free</h1>
            <p>Land your dream job with the help of our resume builder</p>
            <Link to="/resumes"><button className="btn">Let's Get Started</button></Link>
        </div>
    );
}

export default Home; 