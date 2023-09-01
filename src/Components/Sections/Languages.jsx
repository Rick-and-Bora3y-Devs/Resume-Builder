//Styles
import { useState } from "react";
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import SaveCancelBtn from "../saveCancelBtn.jsx";

function Languages(props){

    const [languagesSection, setLanguagesSection] = useState({
        language: " ",
        proficiency: " "
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setLanguagesSection(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function SubmitChanges() {
        props.addLanguages(languagesSection);
    }

      return <div className={styles.sec}>
        <h1 className={styles.Heading}>Languages</h1>
        <AddBtn text={"Add Language"}/>
        <div className={styles.Inputs}>
            <div>
                <label>Language</label>
                <input type="text" onChange={handleChange} name="language" value={languagesSection.language} placeholder="Language" />
            </div>

            <div>
                <label>Proficiency</label>
                <input type="text" onChange={handleChange} name="proficiency" value={languagesSection.proficiency} placeholder="Proficiency" />
            </div>
        </div>
        <br/>
        {/* <button onClick={SubmitChanges}>save</button> */}
        <SaveCancelBtn onClick={SubmitChanges} />
        </div>
}

export default Languages;