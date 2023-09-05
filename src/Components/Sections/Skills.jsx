//React Hooks
import { useState , useReducer } from "react";

//Styles
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import SaveCancelBtn from "../saveCancelBtn.jsx";

const ActionTypes = {
    AddSkill: "ADD_Skill",
    DeleteSkill: "DELETE_SKill",
};

const skillsReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.AddSkill:
            return [...state, action.payload];
        case ActionTypes.DeleteSkill:
            return state.filter((skill) => skill.id !== action.payload.id);
        default:
            return state;
    }
};


let idSkillCounter = 0;


function Skills(props){

    //States
    const [isFormVisible, setFormVisible] = useState(false);
    const [skills, dispatch] = useReducer(skillsReducer, []);
    const [skillsSection, setSkillSection] = useState("");

    //Form Handlers

    const showForm = () => {
        if (!isFormVisible) {
            setFormVisible(true);
        }
    };
    
    const handleCancel = () => {
        setSkillSection("");
        setFormVisible(false);
    }

    //Skills Handlers

    const deleteSkill = (id) => {
        dispatch({ type: ActionTypes.DeleteSkill, payload: { id } });
        props.deleteSkill(id)
    };
    
    const editSkill = (skill) => {
        setSkillSection(skill.skill);
        showForm();
        deleteSkill(skill.id);
    };
    
    const saveSkills = () => {
        const id = idSkillCounter;
        idSkillCounter++;
        const newSkill = {id , skill : skillsSection};

        dispatch({ type: ActionTypes.AddSkill, payload: newSkill });
        handleCancel();
    };


    function handleChange(event) {
        const value = event.target.value;
        setSkillSection(value);
    }

    function handleCheck(event, skill) {
        const checked = event.target.checked;
        checked ? props.addSkills(skill) : props.deleteSkill(skill.id);
      }

    return <div className={styles.sec}>
        <h1 className={styles.Heading}>Skills</h1>
        <AddBtn text={"Add A Skill"} onClick={showForm}/>
        {/* Skills Form */}
        {isFormVisible && <> <div className={styles.Inputs}>
            <div className={styles.skill}>
                <label>New Skill</label>
                <input value={skillsSection} onChange={handleChange} type="text"/>
            </div>
        </div>
        <SaveCancelBtn onClick={saveSkills} onCancel={handleCancel} />
        </>}

        {/* Skills */}

        <div>
            {skills.map((skill) => (
                <div key={skill.id} className={styles.prev}>
                <input type="checkbox" onChange={(event)=>handleCheck(event, skill)} />
                <div>
                    <h3>
                        {skill.skill} 
                    </h3>
                </div>
                <div className={styles.formControls}>
                    <button className={styles.editBtn} onClick={() => editSkill(skill)}>Edit</button>
                    <button className={styles.deleteBtn} onClick={() => deleteSkill(skill.id)}>Delete</button>
                </div>
                </div>
            ))}
        </div>




    </div>
}


export default Skills;