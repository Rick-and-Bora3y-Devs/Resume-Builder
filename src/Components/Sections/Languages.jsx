//Styles
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import SaveCancelBtn from "../saveCancelBtn.jsx";

function Languages(){
      return <div className={styles.sec}>
        <h1 className={styles.Heading}>Languages</h1>
        <AddBtn text={"Add Language"}/>
        <div className={styles.Inputs}>
            <div>
                <label>Language</label>
                <input type="text" placeholder="Language" />
            </div>

            <div>
                <label>Proficiency</label>
                <input type="text" placeholder="Proficiency" />
            </div>
        </div>
        <br/>
        <SaveCancelBtn />
        </div>
}

export default Languages;