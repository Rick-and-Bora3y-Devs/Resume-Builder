//Styles
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import TextEditor from "../TextEditor";
import SaveCancelBtn from "../saveCancelBtn.jsx";

import { useState } from "react";

function Courses(props) {

    const [coursesSection, setCoursesSection] = useState({
        courses: "",
        provider: "",
        startDate: "",
        endDate: "",
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setCoursesSection(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function SubmitChanges() {
        props.addCourses(coursesSection);
    }

    return (
        <div className={styles.sec}>
        <h1 className={styles.Heading}>Courses</h1>
        <AddBtn text={"Add A Course"}/>
        <div className={styles.Inputs}>
            <div>
                <label>Course</label>
                <input 
                type="text" 
                value={coursesSection.courses} 
                name="courses" 
                onChange={handleChange} 
                placeholder="Course" 
                />
            </div>

            <div>
                <label>Provider</label>
                <input 
                type="text" 
                value={coursesSection.provider} 
                name="provider" 
                onChange={handleChange} 
                placeholder="Provider"
                />
            </div>

            <div>
                <label>Start Date</label>
                <input 
                type="month" 
                value={coursesSection.startDate} 
                name="startDate" 
                onChange={handleChange} 
                placeholder="Start Date"  
                />
            </div>

            <div>
                <label>End Date</label>
                <input
                type="month"
                value={coursesSection.endDate}
                name="endDate"
                onChange={handleChange}
                placeholder="End Date"   
                />
            </div>
        </div>
        <TextEditor />
        <br/>
        <SaveCancelBtn onClick={SubmitChanges}/>
    </div>)
}


export default Courses;