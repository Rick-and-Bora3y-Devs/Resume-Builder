//Styles
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import SaveCancelBtn from "../saveCancelBtn.jsx";


function Skills(){
    return <div className={styles.sec}>
        <h1 className={styles.Heading}>Skills</h1>
        <AddBtn text={"Add A Skill"}/>
        <div className={styles.Inputs}>
            <div className={styles.skill}>
                <label>New Skill</label>
                <input type="text"/>
            </div>
        </div>
        <SaveCancelBtn />
    </div>
}


export default Skills;