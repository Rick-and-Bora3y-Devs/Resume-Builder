//Styles
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import SaveCancelBtn from "../saveCancelBtn.jsx";

import { useState } from "react";


function Skills(props){

    const [skillsSection, setSkillSection] = useState("");

    function handleChange(event) {
        const value = event.target.value;
        setSkillSection(value);
    }

    function SubmitChanges() {
        props.addSkills(skillsSection);
    }

    return <div className={styles.sec}>
        <h1 className={styles.Heading}>Skills</h1>
        <AddBtn text={"Add A Skill"}/>
        <div className={styles.Inputs}>
            <div className={styles.skill}>
                <label>New Skill</label>
                <input value={skillsSection} onChange={handleChange} type="text"/>
            </div>
        </div>
        <SaveCancelBtn onClick={SubmitChanges} />
    </div>
}


export default Skills;