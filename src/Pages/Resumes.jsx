import React from "react";

import template1 from "../Assets/template1.png"
import template2 from "../Assets/template2.png"
import template3 from "../Assets/template3.png"

import ResumeBuilder from "./ResumeBuilder";

import Style from "../Css/resumes.module.css"
import { Link, useNavigate } from "react-router-dom";

function Resumes() {
    const navigate = useNavigate();

    return (
        <div className={Style.resumesPage}>
            <div className={Style.container}>
                <h1 className="hero-text">Choose a template</h1>
                <p>you can change it later</p>
                <div className={Style.templates}>
                    <img onClick={()=>navigate('/maker',{state:{id:1}})} src={template1} />
                    <img onClick={()=>navigate('/maker',{state:{id:2}})} src={template2} />
                    <img onClick={()=>navigate('/maker',{state:{id:3}})} src={template3} />
                </div>
                <button onClick={()=>navigate('/maker',{state:{id:1}})} className="btn">Skip for now</button>
            </div>
        </div>
    );
}


export default Resumes;