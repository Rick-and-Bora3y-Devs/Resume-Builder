//Styles
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import TextEditor from "../TextEditor";
import SaveCancelBtn from "../saveCancelBtn.jsx";


function Courses() {
    return (
        <div className={styles.sec}>
        <h1 className={styles.Heading}>Courses</h1>
        <AddBtn text={"Add A Course"}/>
        <div className={styles.Inputs}>
            <div>
                <label>Course</label>
                <input type="text" placeholder="Course" />
            </div>

            <div>
                <label>Provider</label>
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
    </div>)
}


export default Courses;