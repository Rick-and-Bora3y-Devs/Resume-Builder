//React Stuff
import React , {useState} from "react";

//Styles

import styles from "../../Css/resume.module.css";


//Components
import AddBtn from "../AddBtn.jsx";
import TextEditor from "../TextEditor";
import SaveCancelBtn from "../saveCancelBtn.jsx";



function Experience(){

    const [experiences , setExperiences] = useState([]);

    function addExperience(){
        setExperiences(prev => [...prev , <ExperienceForm />])
    }

    return (<div className={styles.sec}>
    <h1 className={styles.Heading}>Work Experience</h1>
    <AddBtn text={"Add Professional Experience"} onClick={addExperience}/>

    {experiences}
       
    </div>)
}


function ExperienceForm()
{
    return  <><div className={styles.Inputs}>
            <div>
                <label>Position</label>
                <input type="text" placeholder="Position" />
            </div>

            <div>
                <label>Degree</label>
                <input type="text" placeholder="Degree" />
            </div>

            <div className={styles.dates}>
                <div className={styles.start}>
                    <label>Start Date</label>
                    <input type="text" placeholder="Start Date" />
                </div>
                <div className={styles.end}>
                    <label>End Date</label>
                    <input type="text" placeholder="End Date" />
                </div>
            </div>
            <div>
                <label>City</label>
                <input type="text" placeholder="City" />
            </div>
            </div>

            <TextEditor />
            <br/>
            <SaveCancelBtn />  
            </>
}


export default Experience;