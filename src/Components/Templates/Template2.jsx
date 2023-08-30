import React from "react";
import Style from "./Template2.module.css"

function Template2() {
    return (
        <div className={Style.container}>
            <div className={Style.personalInfo}>
                <h1 className={Style.header1}>Albert Mondego</h1>
                <p>city, country • +330 12345678 • username@gmail.com</p>
            </div>
           
            <p className={Style.professionalSummaries}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Excepturi voluptatum ratione quaerat quas mollitia at doloremque a sequi dolorem.
            Doloremque!
            </p>
           
            <div className={Style.workExperience}>
                <h2 className={Style.header2}>WORK EXPERIENCE</h2>
                <div><h3 className={Style.header3}>Company name</h3> • 02/2019 - 11/2023</div>
                <p className={Style.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi voluptatum ratione quaerat quas mollitia at doloremque a sequi dolorem.
                Doloremque!</p>
                <p>Jot title</p>
            </div>

            <div>
                <h2 className={Style.header2}>EDUCATION</h2>
                <h3 className={Style.header3}>field of study</h3>
                <p>Educational Institution • 09/2022-07/2026</p>
            </div>

            <div>
                <h2 className={Style.header2}>Volunteering & leadership</h2>
                <h3 className={Style.header3}>Organization</h3>
                <p>involvement • Cairo, Egypt • 03/2021 - 06/2023</p>
                <p className={Style.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi voluptatum ratione quaerat quas mollitia at doloremque a sequi dolorem.
                Doloremque!</p>
            </div>

            <div>
                <h2 className={Style.header2}>SKILLS</h2>
                <p>skill, skill, skill, skill, skill, skill, 
                skill, skill, skill, skill, skill, skill, 
                skill, skill, skill, skill, skill, skill, skill, skill</p>
            </div>

            <div>
                <h2 className={Style.header2}>CERTIFICATIONS</h2>
                <h3 className={Style.header3}>certification</h3>
                <p>Provider • 07/2023 - 9/2023</p>
            </div>

            <div>
                <h2 className={Style.header2}>PROJECTS</h2>
                <h3 className={Style.header3}>projects name</h3>
                <p>Organization • 02/2023 - 04/2023</p>
                <p className={Style.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi voluptatum ratione quaerat quas mollitia at doloremque a sequi dolorem.
                Doloremque!</p>
            </div>

            <div>
                <h2 className={Style.header2}>COURSES</h2>
                <h3 className={Style.header3}>course</h3>
                <p>Institution • 02/2023 - 09/2023</p>
            </div>
        
            <div>
                <h2 className={Style.header2}>LANGUAGES</h2>
                <p>language • level</p>
            </div>
        </div>
    );
}

export default Template2;