//Styles
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import SaveCancelBtn from "../saveCancelBtn.jsx";

import { useState } from "react";

function Education(){
    return (
        <div className={styles.sec}>
        <h1 className={styles.Heading}>Education</h1>
        <AddBtn text={"Add Education"}/>
        <SaveCancelBtn />
        </div>
    )
}

function EducationForm(props)
{

    const [educationSection, setEduactionSection] = useState({
        institute: "",
        degree: "",
        startDate: "",
        endDate: "",
        city: "",
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setEduactionSection(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function SubmitChanges() {
        props.addEducation(educationSection);
    }

    return  <div className={styles.sec}><div className={styles.Inputs}>
            <div>
                <label>Institute</label>
                <input 
                type="text" 
                name="institute" 
                value={educationSection.institute} 
                onChange={handleChange} 
                placeholder="Institute" 
                />
            </div>

            <div>
                <label>Degree</label>
                <input 
                type="text" 
                name="degree" 
                value={educationSection.degree} 
                onChange={handleChange} 
                placeholder="Degree"
                />

            </div>

            <div className={styles.dates}>
                <div className={styles.start}>
                    <label>Start Date</label>
                    <input 
                    type="text" 
                    name="startDate" 
                    value={educationSection.startDate} 
                    onChange={handleChange} 
                    placeholder="Start Date"
                    />
                </div>
                <div className={styles.end}>
                    <label>End Date</label>
                    <input 
                    type="text" 
                    name="endDate" 
                    value={educationSection.endDate} 
                    onChange={handleChange} 
                    placeholder="End Date"
                    />
                </div>
            </div>
            <div>
                <label>City</label>
                <input 
                type="text" 
                name="city" 
                value={educationSection.city} 
                onChange={handleChange} 
                placeholder="City"
                />
 
            </div>
            </div>
            <SaveCancelBtn onClick={SubmitChanges}/>  
            </div>
}


export default Education;
export {EducationForm};