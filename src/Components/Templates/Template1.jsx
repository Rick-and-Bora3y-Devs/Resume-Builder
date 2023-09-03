import React from "react";
import Style from "./Template1.module.css";
import Languages from "../Sections/Languages";

function Template1(props) {
    return (
        <div className={Style.container}>
        

            {props.personalInfo.firstName && 
                <div className={Style.personalInfo}>
                <h1 className={Style.header1}>
                    {props.personalInfo.firstName + " "}
                    {props.personalInfo.secondName}
                </h1>
                <p>
                    {props.personalInfo.city}, 
                    {props.personalInfo.country} • 
                    {props.personalInfo.phoneNumber} • 
                    {props.personalInfo.email}
                </p>
            </div>
            }
           
           {props.summary &&
            <p className={Style.professionalSummaries}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Excepturi voluptatum ratione quaerat quas mollitia at doloremque a sequi dolorem.
            Doloremque!
            </p>}
           
           {props.workInfo.position &&
            <div className={Style.workExperience}>
                <h3 className={Style.header3}>WORK EXPERIENCE</h3>
                <div>
                <h2 className={Style.header2}>{props.workInfo.degree}</h2> • 
                {props.workInfo.startDate} - 
                {props.workInfo.endDate}
                </div>
                <p className={Style.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi voluptatum ratione quaerat quas mollitia at doloremque a sequi dolorem.
                Doloremque!</p>
                <p>{props.workInfo.position}</p>
            </div>}

            {props.educationInfo.institute && 
            <div>
                <h3 className={Style.header3}>EDUCATION</h3>
                <h2 className={Style.header2}>{props.educationInfo.institute}</h2>
                <p>
                    {props.educationInfo.degree} • 
                    {props.educationInfo.startDate} - 
                    {props.educationInfo.endDate}
                </p>
            </div>}

            {props.volunteeringInfo.organization &&
            <div>
                <h3 className={Style.header3}>Volunteering & leadership</h3>
                <h2 className={Style.header2}>{props.volunteeringInfo.organization}</h2>
                <p>
                    {props.volunteeringInfo.involvement} • 
                    {props.volunteeringInfo.startDate} - 
                    {props.volunteeringInfo.endDate}
                </p>
                <p className={Style.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi voluptatum ratione quaerat quas mollitia at doloremque a sequi dolorem.
                Doloremque!</p>
            </div>}

            {props.skillsInfo && 
            <div>
                <h3 className={Style.header3}>SKILLS</h3>
                <p>{props.skillsInfo}</p>
            </div>}

            {props.certificationsInfo.certification &&
            <div>
                <h3 className={Style.header3}>CERTIFICATIONS</h3>
                <h2 className={Style.header2}>{props.certificationsInfo.certification}</h2>
                <p>
                    {props.certificationsInfo.provider} • 
                    {props.certificationsInfo.startDay} - 
                    {props.certificationsInfo.endDate}
                </p>
            </div>}

            {props.projectsInfo.project && 
            <div>
                <h3 className={Style.header3}>PROJECTS</h3>
                <h2 className={Style.header2}>{props.projectsInfo.project}</h2>
                <p>
                    {props.projectsInfo.organization} • 
                    {props.projectsInfo.startDate} - 
                    {props.projectsInfo.endDate}
                </p>
                <p className={Style.description}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi voluptatum ratione quaerat quas mollitia at doloremque a sequi dolorem.
                    Doloremque!
                </p>
            </div>}

            {props.coursesInfo.courses &&
            <div>
                <h3 className={Style.header3}>COURSES</h3>
                <h2 className={Style.header2}>{props.coursesInfo.courses}</h2>
                <p>
                    {props.coursesInfo.provider} • 
                    {props.coursesInfo.startDate} - 
                    {props.coursesInfo.endDate}
                </p>
            </div>}
        
            {/* {props.languageInfo.map((info,index) => (
                <div key={index}>
                <h3 className={Style.header3}>LANGUAGES</h3>
                <p>{info.language} • {info.proficiency}</p>
            </div>))
            } */}

             <div>
                <h3 className={Style.header3}>LANGUAGES</h3>
                    {props.languageInfo.map((info,index)=><p key={index}>{info.language} • {info.proficiency}</p>)}
            </div>
        </div>
    );
}

export default Template1;