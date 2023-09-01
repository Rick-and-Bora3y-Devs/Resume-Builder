//Styles
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import TextEditor from "../TextEditor";
import SaveCancelBtn from "../saveCancelBtn.jsx";

import { useState } from "react";

function Projects(props){

    const [projectsSection, setProjectsSection] = useState({
        project: "",
        organization: "",
        startDate: "",
        endDate: "",
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setProjectsSection(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function SubmitChanges() {
        props.addProjects(projectsSection);
    }

        return  <div className={styles.sec}>
        <h1 className={styles.Heading}>Projects</h1>
        <AddBtn text={"Add A Project"}/>
        <div className={styles.Inputs}>
            <div>
                <label>Project</label>
                <input 
                type="text" 
                onChange={handleChange} 
                name="project" 
                value={projectsSection.project} 
                placeholder="Project"
                />
            </div>

            <div>
                <label>Organization</label>
                <input 
                type="text" 
                onChange={handleChange} 
                name="organization" 
                value={projectsSection.organization} 
                placeholder="Organization"
                />
            </div>

            <div>
                <label>Start Date</label>
                <input 
                type="text" 
                onChange={handleChange} 
                name="startDate" 
                value={projectsSection.startDate} 
                placeholder="Start Date"
                />
            </div>

            <div>
                <label>End Date</label>
                <input 
                type="text" 
                onChange={handleChange} 
                name="endDate" 
                value={projectsSection.endDate} 
                placeholder="End Date" 
                />
            </div>
        </div>
        <TextEditor />
        <br/>
        <SaveCancelBtn onClick={SubmitChanges} />
        </div>
}

export default Projects;