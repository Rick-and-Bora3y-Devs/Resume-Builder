import React from "react";
import Style from "./Template3.module.css";

function Template3() {
    return (
        <div className={Style.container}>
            <div className={Style.personalInfo}>
                <h1>Albert Mondego</h1>
                <p>city, country</p>
                <p>username@gmail.com • +330 12345678</p>
            </div>
           
            <p className={Style.professionalSummaries}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Excepturi voluptatum ratione quaerat quas mollitia at doloremque a sequi dolorem.
            Doloremque!
            </p>
           
            <div className={Style.workExperience}>
                <h3>WORK EXPERIENCE</h3>
                <div><h2>Company name</h2> • 02/2019 - 11/2023</div>
                <p className={Style.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi voluptatum ratione quaerat quas mollitia at doloremque a sequi dolorem.
                Doloremque!</p>
                <p>Jot title</p>
            </div>

            <div>
                <h3>EDUCATION</h3>
                <h2>field of study</h2>
                <p>Educational Institution • 09/2022-07/2026</p>
            </div>

            <div className="volunteering">
                <h3>Volunteering & leadership</h3>
                <h2>Organization</h2>
                <p>involvement • Cairo, Egypt • 03/2021 - 06/2023</p>
                <p className={Style.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi voluptatum ratione quaerat quas mollitia at doloremque a sequi dolorem.
                Doloremque!</p>
            </div>

            <div className="skills">
                <h3>SKILLS</h3>
                <p>skill, skill, skill, skill, skill, skill, 
                skill, skill, skill, skill, skill, skill, 
                skill, skill, skill, skill, skill, skill, skill, skill</p>
            </div>

            <div className="certification">
                <h3>CERTIFICATIONS</h3>
                <h2>certification</h2>
                <p>Provider • 07/2023 - 9/2023</p>
            </div>

            <div className="projects">
                <h3>PROJECTS</h3>
                <h2>projects name</h2>
                <p>Organization • 02/2023 - 04/2023</p>
                <p className={Style.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi voluptatum ratione quaerat quas mollitia at doloremque a sequi dolorem.
                Doloremque!</p>
            </div>

            <div>
                <h3>COURSES</h3>
                <h2>course</h2>
                <p>Institution • 02/2023 - 09/2023</p>
            </div>
        
            <div>
                <h3>LANGUAGES</h3>
                <p>language • level</p>
            </div>
        </div>
    );
}

export default Template3;