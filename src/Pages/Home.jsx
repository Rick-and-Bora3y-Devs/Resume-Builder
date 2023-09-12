import React from "react";
import { Link } from "react-router-dom";
import Style from "../Css/home.module.css";
import cover1 from "../Assets/cover1.svg"
import cover2 from "../Assets/cover2.svg"

function Home() {
    return (
        <div className={Style.container}>
            <div>
                <img className={Style.cover1} src={cover1} />
                <img className={Style.cover2} src={cover2} />
            </div>

            <div className={Style.navbar}>
                <p className={Style.logo}>LOGO</p>
                <div className={Style.links}>
                    <Link to={"/login"}><button className={Style.login}>Login</button></Link>
                    <Link to={"/signUp"}><button className={Style.signUp}>Sign Up</button></Link>
                </div>
            </div>
            
            <div className={Style.content}>
                <h1 className="hero-text">create a professional resume for free</h1>
                <p>Land your dream job with the help of our resume builder</p>
                <Link to="/resumes"><button className="btn">Let's Get Started</button></Link>
            </div>
        </div>
    );
}

export default Home; 