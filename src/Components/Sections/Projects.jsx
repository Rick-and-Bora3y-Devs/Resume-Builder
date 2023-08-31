//Styles
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import TextEditor from "../TextEditor";
import SaveCancelBtn from "../saveCancelBtn.jsx";


function Projects(){

        return  <div className={styles.sec}>
        <h1 className={styles.Heading}>Projects</h1>
        <AddBtn text={"Add A Project"}/>
        <div className={styles.Inputs}>
            <div>
                <label>Project</label>
                <input type="text" placeholder="Course" />
            </div>

            <div>
                <label>Organization</label>
                <input type="text" placeholder="Provider" />
            </div>

            <div>
                <label>Start Date</label>
                <input type="text" placeholder="Start Date" />
            </div>

            <div>
                <label>End Date</label>
                <input type="text" placeholder="End Date" />
            </div>
        </div>
        <TextEditor />
        <br/>
        <SaveCancelBtn />
        </div>
}

export default Projects;