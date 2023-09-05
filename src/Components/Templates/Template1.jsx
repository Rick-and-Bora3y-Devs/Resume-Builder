import React from "react";
import Style from "./Template1.module.css";

function Template1(props) {
    return (
        <div className={Style.container} ref={props.pref}>
        

            {props.personalInfo.firstName && 
                <div className={Style.personalInfo}>
                <h1 className={Style.header1}>
                    {props.personalInfo.firstName + " "}
                    {props.personalInfo.secondName}
                </h1>
                <p>
                    {props.personalInfo.city + ", "
                    + props.personalInfo.country + " • " 
                    + props.personalInfo.phoneNumber + " • " 
                    + props.personalInfo.email}
                </p>
            </div>
            }
           
           {props.summary && <p dangerouslySetInnerHTML={{__html: props.summary}} />}
           
           {props.workInfo.length > 0 &&
            <div className={Style.workExperience}>
                <h3 className={Style.header3}>WORK EXPERIENCE</h3>
                {props.workInfo.map((info,index)=>(
                    <div key={index}>
                    <div>
                        <h2 className={Style.header2}>{info.Company}</h2> • {info.Start + " - " + info.End}  
                    </div>
                    <p dangerouslySetInnerHTML={{__html: info.description}} />
                    <p>{info.Position}</p>
                </div>
                ))}
            </div>}

        {props.educationInfo.length > 0 &&        
            <div>
                <h3 className={Style.header3}>EDUCATION</h3>
                {props.educationInfo.map((info,index)=>(
                    <div key={index}>
                    <h2 className={Style.header2}>{info.institute}</h2>
                    <p>
                        {info.degree + " • " + info.startDate + " - " + info.endDate}
                    </p>
                </div>))}
            </div>}

            {props.volunteeringInfo.length > 0 &&
            <div>
                <h3 className={Style.header3}>Volunteering & leadership</h3>
                {props.volunteeringInfo.map((info,index)=>(
                    <div key={index}>
                    <h2 className={Style.header2}>{info.organization}</h2>
                    <p>
                        {info.invlovement + " • " + info.startDate + " - " + info.endDate}
                    </p>
                    <p dangerouslySetInnerHTML={{__html: info.description}} />
                </div>
                ))}
            </div>}

            {props.skillsInfo.length > 0 && 
            <div>
                <h3 className={Style.header3}>SKILLS</h3>
                {props.skillsInfo.map((info,index)=><p key={index}>{info.skill}</p>)}
            </div>}

            {props.certificationsInfo.length > 0 &&
            <div>
                <h3 className={Style.header3}>CERTIFICATIONS</h3>
                {props.certificationsInfo.map((info,index)=>(
                <div key={index}>
                    <h2 className={Style.header2}>{info.certification}</h2>
                    <p>
                        {info.provider + " • " + info.startDate + " - " + info.endDate}
                    </p>
                </div>
                ))}
            </div>}

            {props.projectsInfo.length > 0 && 
            <div>
                <h3 className={Style.header3}>PROJECTS</h3>
                {props.projectsInfo.map((info,index)=>(
                <div key={index}>
                    <h2 className={Style.header2}>{info.project}</h2>
                    <p>
                        {info.organization + " • " + info.startDate + " - " + info.endDate}
                    </p>
                    <p dangerouslySetInnerHTML={{__html: info.description}} />
                </div>
                ))}
            </div>}

            {props.coursesInfo.length > 0 &&
            <div>
                <h3 className={Style.header3}>COURSES</h3>
                {props.coursesInfo.map((info,index)=>(
                    <div key={index}>
                    <h2 className={Style.header2}>{info.course}</h2>
                    <p>
                        {info.provider + " • " + info.startDate + " - " + info.endDate}
                    </p>
                    <p dangerouslySetInnerHTML={{__html: info.description}} />
                </div>
                ))}
            </div>}
        
            {props.languageInfo.length > 0 &&
             <div>
                <h3 className={Style.header3}>LANGUAGES</h3>
                    {props.languageInfo.map((info,index)=><p key={index}>{info.language} • {info.proficiency}</p>)}
            </div>}

        </div>
    );
}

export default Template1;