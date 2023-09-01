//Styles
import styles from "../../Css/resume.module.css";


//Components
import AddBtn from "../AddBtn.jsx";
import TextEditor from "../TextEditor";
import SaveCancelBtn from "../saveCancelBtn.jsx";

import { useState } from "react";

function Certifactes(props){

    const [certificationsSection, setCertificationsSection] = useState({
        certification: " ",
        provider: " ",
        startDate: " ",
        endDate: " ",
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setCertificationsSection(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function SubmitChanges() {
        props.addCertifications(certificationsSection);
    }

    return   <div className={styles.sec}>
                <h1 className={styles.Heading}>Certifications</h1>
                <AddBtn text={"Add Certification"}/>

                <div className={styles.Inputs}>
                    <div>
                        <label>Certification</label>
                        <input
                        type="text"
                        onChange={handleChange}
                        value={certificationsSection.certification}
                        name="certification"
                        placeholder="Certification"
                        />
                    </div>

                    <div>
                        <label>Provider</label>
                        <input 
                        type="text"
                        onChange={handleChange}
                        value={certificationsSection.provider}
                        name="provider"
                        placeholder="Provider"
                        />
                    </div>

                    <div>
                        <label>Start Date</label>
                        <input
                        type="text"
                        onChange={handleChange}
                        value={certificationsSection.startDate} 
                        name="startDate"
                        placeholder="Start Date"
                        />
                    </div>

                    <div>
                        <label>End Date</label>
                        <input
                        type="date"
                        onChange={handleChange}
                        value={certificationsSection.endDate}
                        name="endDate"
                        placeholder="End Date"
                        />
                    </div>
                </div>
                <SaveCancelBtn onClick={SubmitChanges}/>
            </div>
}


export default Certifactes;