
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
import Experience,{ExperienceForm} from "../Components/Sections/Experience.jsx";
import Languages from "../Components/Sections/Languages.jsx";
import Certifactes from "../Components/Sections/Certifications.jsx";
import Projects from "../Components/Sections/Projects.jsx";
import Volunteering from "../Components/Sections/Voulnteering.jsx";
import Skills from "../Components/Sections/Skills.jsx";
import Courses from "../Components/Sections/Courses.jsx";
import Education,{EducationForm} from "../Components/Sections/Education.jsx";

import { Link, useLocation } from "react-router-dom";

function ResumeBuilder()
{

    const location = useLocation();
    const [template, setTemplate] = useState(location.state.id);
    const [languagesInfo,setLanguagesInfo] = useState({});
    const [personalInfo,setPersonalInfo] = useState({});
    const [skillsInfo,setSkillsInfo] = useState("");
    const [certificationsInfo,setCertificationsInfo] = useState({});
    const [volunteeringInfo,setVolunteeringInfo] = useState({});
    const [coursesInfo,setCoursesInfo] = useState({});
    const [projectsInfo,setProjectsInfo] = useState({});
    const [workInfo,setWorkInfo] = useState({});
    const [educationInfo,setEducationInfo] = useState({});

    function addLanguages(languageSection) {
        setLanguagesInfo(prevValue => {
            return {
                ...languageSection
            }
        });
    }

    function addPersonalInfo(PersonalInfoSection) {
        setPersonalInfo(prevValue => {
            return {
                // ...prevValue,
                ...PersonalInfoSection,
            }
        });
    }

    function addSkills(skillsSection) {
        setSkillsInfo(skillsSection);
    }

    function addCertifications(certificationsSection) {
        setCertificationsInfo(prevValue => {
            return {
                ...certificationsSection,
            }
        });
    }

    function addVolunteering(volunteeringSection) {
        setVolunteeringInfo(prevValue => {
            return {
                ...volunteeringSection,
            }
        });
    }

    function addCourses(coursesSection) {
        setCoursesInfo(prevValue => {
            return {
                ...coursesSection,
            }
        });
    }

    function addProjects(projectsSection) {
        setProjectsInfo(prevValue => {
            return {
                ...projectsSection,
            }
        });
    }

    function addWork(workSection) {
        setWorkInfo(prevValue => {
            return {
                ...workSection,
            }
        });
    }

    function addEducation(educationSection) {
        setEducationInfo(prevValue => {
            return {
                ...educationSection,
            }
        });
    }

    return <div className={styles.Container}>
                <div className={styles.Builder}>
                    <PersonalInfo addPersonalInfo={addPersonalInfo}/>                    
                    <Summary/>
                    <Experience />
                    <ExperienceForm addWork={addWork} />
                    <Education/>
                    <EducationForm addEducation={addEducation} />                    
                    <Languages addLanguages={addLanguages}/>
                    <Certifactes addCertifications={addCertifications}/>
                    <Courses addCourses={addCourses}/>
                    <Projects addProjects={addProjects}/>
                    <Volunteering addVolunteering={addVolunteering}/>
                    <Skills addSkills={addSkills}/>
                </div>

                <div className={styles.Preview}>
                    <div className={styles.Controls}>
                    <Link to='/resumes'><button className={styles.Choose}>Choose Template</button></Link>
                        <button className={styles.Download}>Download As PDF</button>
                    </div>
                    <div className={styles.resume}>
                        {
                            template === 1 ?
                            <Template1
                            language={languagesInfo.language}
                            proficiency={languagesInfo.proficiency}
                            personalInfo={personalInfo}
                            skillsInfo={skillsInfo}
                            certificationsInfo={certificationsInfo}
                            volunteeringInfo={volunteeringInfo}
                            coursesInfo={coursesInfo}
                            projectsInfo={projectsInfo}
                            workInfo={workInfo}
                            educationInfo={educationInfo}
                            /> : 
                            template === 2 ?
                            <Template2 
                            language={languagesInfo.language}
                            proficiency={languagesInfo.proficiency}
                            personalInfo={personalInfo}
                            skillsInfo={skillsInfo}
                            certificationsInfo={certificationsInfo}
                            volunteeringInfo={volunteeringInfo}
                            coursesInfo={coursesInfo}
                            projectsInfo={projectsInfo}
                            workInfo={workInfo}
                            educationInfo={educationInfo}
                            /> :
                            <Template3 
                            language={languagesInfo.language}
                            proficiency={languagesInfo.proficiency}
                            personalInfo={personalInfo}
                            skillsInfo={skillsInfo}
                            certificationsInfo={certificationsInfo}
                            volunteeringInfo={volunteeringInfo}
                            coursesInfo={coursesInfo}
                            projectsInfo={projectsInfo}
                            workInfo={workInfo}
                            educationInfo={educationInfo}
                            />
                        }
                    </div>
                </div>

            </div>

}


export default ResumeBuilder;