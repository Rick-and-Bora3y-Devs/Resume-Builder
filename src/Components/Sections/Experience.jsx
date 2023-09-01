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


function ExperienceForm(props)
{

    const [workSection, setWorkSection] = useState({
        position: "",
        degree: "",
        startDate: "",
        endDate: "",
        city: "",
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setWorkSection(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function SubmitChanges() {
        props.addWork(workSection);
    }

    return  <div className={styles.sec}><div className={styles.Inputs}>
            <div>
                <label>Position</label>
                <input 
                type="text" 
                name="position" 
                value={workSection.position} 
                onChange={handleChange} 
                placeholder="Position" 
                />
            </div>

            <div>
                <label>Degree</label>
                <input 
                type="text" 
                name="degree" 
                value={workSection.degree} 
                onChange={handleChange} 
                placeholder="Degree" />

            </div>

            <div className={styles.dates}>
                <div className={styles.start}>
                    <label>Start Date</label>
                    <input 
                    type="text" 
                    name="startDate" 
                    value={workSection.startDate} 
                    onChange={handleChange} 
                    placeholder="Start Date
                    " />
                </div>
                <div className={styles.end}>
                    <label>End Date</label>
                    <input 
                    type="text" 
                    name="endDate" 
                    value={workSection.endDate} 
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
                value={workSection.city} 
                onChange={handleChange} 
                placeholder="City" />
 
            </div>
            </div>

            <TextEditor />
            <br/>
            <SaveCancelBtn onClick={SubmitChanges}/>  
            </div>
}


export default Experience;
export {ExperienceForm};