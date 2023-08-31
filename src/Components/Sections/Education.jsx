//Styles
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import SaveCancelBtn from "../saveCancelBtn.jsx";


function Education(){
    return (
        <div className={styles.sec}>
        <h1 className={styles.Heading}>Education</h1>
        <AddBtn text={"Add Education"}/>
        <SaveCancelBtn />
        </div>
    )
}


export default Education;