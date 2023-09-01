//Styles
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import TextEditor from "../TextEditor";
import SaveCancelBtn from "../saveCancelBtn.jsx";

import { useState } from "react";

function Voulnteering(props){

    const [volunteeringSection, setVolunteeringSection] = useState({
        organization: "",
        involvement: "",
        startDate: "",
        endDate: "",
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setVolunteeringSection(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function SubmitChanges() {
        props.addVolunteering(volunteeringSection);
    }

    return <div className={styles.sec}>
    <h1 className={styles.Heading}>Volunteering</h1>
    <AddBtn text={"Add Experience"}/>
    <div className={styles.Inputs}>
        <div>
            <label>Organization</label>
            <input 
            type="text" 
            name="organization" 
            value={volunteeringSection.organization} 
            onChange={handleChange} 
            placeholder="organization"
            />

        </div>

        <div>
            <label>Involvement</label>
            <input
            type="text"
            name="involvement"
            value={volunteeringSection.involvment}
            onChange={handleChange}
            placeholder="Involvement"
            />
        </div>

        <div>
            <label>Start Date</label>
            <input
            type="text"
            name="startDate"
            value={volunteeringSection.startDate}
            onChange={handleChange}
            placeholder="Start Date"
            />
        </div>

        <div>
            <label>End Date</label>
            <input 
            type="text"
            name="endDate"
            value={volunteeringSection.endDate}
            onChange={handleChange}
            placeholder="End Date"
            />
        </div>
    </div>
    <TextEditor />
    <br/>
    <SaveCancelBtn onClick={SubmitChanges}/>
    </div>
}

export default Voulnteering;