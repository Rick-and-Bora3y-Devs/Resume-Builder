import React from "react";

import template1 from "../Assets/template1.png"
import template2 from "../Assets/template2.png"
import template3 from "../Assets/template3.png"

import Style from "../Css/resumes.module.css"
import { Link } from "react-router-dom";

function Resumes() {
    return (
        <div className={Style.resumesPage}>
            <div className={Style.container}>
                <h1 className="hero-text">Choose a template</h1>
                <p>you can change it later</p>
                <div className={Style.templates}>
                    <Link to="/maker"><img src={template1} /></Link>
                    <Link to="/maker"><img src={template2} /></Link>
                    <Link to="/maker"><img src={template3} /></Link>
                </div>
                <Link to="/maker"><button className="btn">Skip for now</button></Link>
            </div>
        </div>
    );
}


export default Resumes;