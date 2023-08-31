
//React Stuff
import { useState } from "react";


//Styles
import styles from "../Css/Resume.module.css";


//Templates
import Template1 from "../Components/Templates/Template1.jsx";
import Template2 from "../Components/Templates/Template2.jsx";
import Template3 from "../Components/Templates/Template3.jsx";

//Sections
import PersonalInfo from "../Components/Sections/Personal.jsx";
import Summary from "../Components/Sections/Summary.jsx";
import Experience from "../Components/Sections/Experience.jsx";
import Languages from "../Components/Sections/Languages.jsx";
import Certifactes from "../Components/Sections/Certifications.jsx";
import Projects from "../Components/Sections/Projects.jsx";
import Volunteering from "../Components/Sections/Voulnteering.jsx";
import Skills from "../Components/Sections/Skills.jsx";
import Courses from "../Components/Sections/Courses.jsx";
import Education from "../Components/Sections/Education.jsx";


function ResumeBuilder()
{

    const [template, setTemplate] = useState(1);


    return <div className={styles.Container}>
                <div className={styles.Builder}>
                    <PersonalInfo/>                    
                    <Summary/>
                    <Experience/>
                    <Education/>                    
                    <Languages/>
                    <Certifactes/>
                    <Courses/>
                    <Projects/>
                    <Volunteering/>
                    <Skills/>
                </div>

                <div className={styles.Preview}>
                    <div className={styles.Controls}>
                        <button className={styles.Choose}>Choose Template</button>
                        <button className={styles.Download}>Download As PDF</button>
                    </div>
                    <div className={styles.resume}>
                            {template === 1 && <Template1/>}
                    </div>
                </div>

            </div>

}


export default ResumeBuilder;