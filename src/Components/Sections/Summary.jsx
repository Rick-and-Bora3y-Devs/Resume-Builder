//Styles
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import TextEditor from "../TextEditor";
import SaveCancelBtn from "../saveCancelBtn.jsx";

function Summary(){
    return(
            <div className={styles.sec}>
                <h1 className={styles.Heading}>Professional Summaries</h1>
                <AddBtn text={"Add Professional Summary"}/>
                <TextEditor />
                <br />
                <SaveCancelBtn />
            </div>
    )
}


export default Summary;