
//React Stuff
import { useState , useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";


//ICONS

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX} from '@fortawesome/free-solid-svg-icons'


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

//Images
import template1 from "../Assets/template1.png"
import template2 from "../Assets/template2.png"
import template3 from "../Assets/template3.png"

//Libraries
import JsPDF from "jspdf"


function ResumeBuilder()
{

    const cv = useRef(null);

    const location = useLocation();
    const [template, setTemplate] = useState(location.state?.id);
    const [showPopup,setShowPopUp] = useState(false);
    const [languagesInfo,setLanguagesInfo] = useState([]);
    const [personalInfo,setPersonalInfo] = useState({});
    const [skillsInfo,setSkillsInfo] = useState([]);
    const [certificationsInfo,setCertificationsInfo] = useState([]);
    const [volunteeringInfo,setVolunteeringInfo] = useState([]);
    const [coursesInfo,setCoursesInfo] = useState([]);
    const [projectsInfo,setProjectsInfo] = useState([]);
    const [workInfo,setWorkInfo] = useState([]);
    const [educationInfo,setEducationInfo] = useState([]);


    const generatePDF = () => {
        const report = new JsPDF('portrait', 'pt', 'a4');
        report.html(cv.current).then(() => {
          report.save('report.pdf');
        });
    };


    function addLanguages(Section) {
        setLanguagesInfo(prevValue => {
            return [
                ...prevValue,
                Section,
            ]
        });
    }

    function addPersonalInfo(PersonalInfoSection) {
        setPersonalInfo({...PersonalInfoSection});
    }

    function addSkills(Section) {
        setSkillsInfo(prevValue => {
            return [
                ...prevValue,
                Section,
            ]
        });
    }

    function addCertifications(Section) {
        setCertificationsInfo(prevValue => {
            return [
                ...prevValue,
                Section,
            ]
        });
    }

    function addVolunteering(Section) {
        setVolunteeringInfo(prevValue => {
            return [
                ...prevValue,
                Section,
            ]
        });
    }

    function addCourses(Section) {
        setCoursesInfo(prevValue => {
            return [
                ...prevValue,
                Section,
            ]
        });
    }
    
    function addProjects(Section) {
        setProjectsInfo(prevValue => {
            return [
                ...prevValue,
                Section,
            ]
        });
    }

    function addWork(Section) {
        setWorkInfo(prevValue => {
            return [
                ...prevValue,
                Section,
            ]
        });
    }

    function addEducation(educationSection) {
        setEducationInfo(prevValue => {
            return [
                ...prevValue,
                educationSection,
            ]
        });
    }

    function deleteEducation(id) {
        setEducationInfo(prev => {
            return prev.filter(item => {
                return item.id !== id;
            })
           });
    }

    function deleteLanguage(id) {
        setLanguagesInfo(prev => {
            return prev.filter(item => {
                return item.id !== id;
            })
           });
    }

    function deleteCourse(id) {
        setCoursesInfo(prev => {
            return prev.filter(item => {
                return item.id !== id;
            })
           });
    }

    function deleteWork(id) {
        setWorkInfo(prev => {
            return prev.filter(item => {
                return item.id !== id;
            })
           });
    }

    function deleteProject(id) {
        setProjectsInfo(prev => {
            return prev.filter(item => {
                return item.id !== id;
            })
           });
    }

    function deleteSkill(id) {
        setSkillsInfo(prev => {
            return prev.filter(item => {
                return item.id !== id;
            })
           });
    }

    function deleteCertification(id) {
        setSkillsInfo(prev => {
            return prev.filter(item => {
                return item.id !== id;
            })
           });
    }

    function deleteVolunteering(id) {
        setVolunteeringInfo(prev => {
            return prev.filter(item => {
                return item.id !== id;
            })
           });
    }

    function chooseTemplate(id) {
        setTemplate(id);
        setShowPopUp(false);
    }


    return  <div className={styles.Container}>
                <div className={styles.Builder}>
        
                    <PersonalInfo addPersonalInfo={addPersonalInfo}/>      

                    <Summary/>

                    <Experience addWork={addWork} deleteWork={deleteWork} />

                    <Education addEducation={addEducation} deleteEducation={deleteEducation} />
         
                    <Languages addLanguages={addLanguages} deleteLanguage={deleteLanguage} />

                    <Certifactes addCertifications={addCertifications} deleteCertification={deleteCertification} />

                    <Courses addCourses={addCourses} deleteCourse={deleteCourse} />

                    <Projects addProjects={addProjects} deleteProject={deleteProject} />

                    <Volunteering addVolunteering={addVolunteering} deleteVolunteering={deleteVolunteering} />

                    <Skills addSkills={addSkills} deleteSkill={deleteSkill} />

                </div>

                <div className={styles.Preview}>
                    <div className={styles.Controls}>
                        <button onClick={()=>{setShowPopUp(true)}} className={styles.Choose}>Choose Template</button>
                        <button className={styles.Download} onClick={generatePDF}>Download As PDF</button>
                </div>


                {showPopup && <div className={styles.templateMenu}>
                        <FontAwesomeIcon icon={faX} className={styles.xBtn} onClick={() => setShowPopUp(false)} />
                        <h1>Templates</h1>
                        <div className={styles.templates}>
                            <img onClick={()=>{chooseTemplate(1)}} className={styles.template} src={template1} />
                            <img onClick={()=>{chooseTemplate(2)}} className={styles.template} src={template2} />
                            <img onClick={()=>{chooseTemplate(3)}} className={styles.template} src={template3} />
                        </div>
                </div>}
                   

                    <div className={styles.resume} ref={cv}>
                        {
                            template === 1 ?
                            <Template1
                            languageInfo={languagesInfo}
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