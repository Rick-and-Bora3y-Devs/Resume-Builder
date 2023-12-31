//React Stuff
import { useState , useReducer } from "react";

//Styles
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import SaveCancelBtn from "../saveCancelBtn.jsx";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash , faPenToSquare } from "@fortawesome/free-solid-svg-icons";


const ActionTypes = {
    AddEducation: "ADD_Education",
    DeleteEducation: "DELETE_Education",
};
  
const educationReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.AddEducation:
            return [...state, action.payload];
        case ActionTypes.DeleteEducation:
            return state.filter((language) => language.id !== action.payload.id);
        default:
            return state;
    }
};

let educationIdCounter = 0;

function Education(props){


    //States
    
    const [isFormVisible, setFormVisible] = useState(false);
    const [educations, dispatch] = useReducer(educationReducer, []);
    const [educationSection, setEduactionSection] = useState({
        institute: "",
        degree: "",
        startDate: "",
        endDate: "",
        city: "",
    });


    //Form Handlers

    const showForm = () => {
        if (!isFormVisible) {
            setFormVisible(true);
        }
    };
    
    const handleCancel = () => {
        setEduactionSection({
          institute: "",
          degree: "",
          startDate: "",
          endDate: "",
          city: "",
        });
        setFormVisible(false);
    };

    //Education Handlers

    const deleteEducation = (id) => {
        dispatch({ type: ActionTypes.DeleteEducation, payload: { id } });
        props.deleteEducation(id);
    };
    
    const editEducation = (education) => {
        setEduactionSection({ ...education });
        showForm();
        deleteEducation(education.id);
    };
    
    const saveEducation = () => {
        const id = educationIdCounter;
        educationIdCounter++;
        const newEducation = { id, ...educationSection };
        
        dispatch({ type: ActionTypes.AddEducation, payload: newEducation });
        handleCancel();
    };

    function handleChange(event) {
        const {name, value} = event.target;

        setEduactionSection(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }


   function handleCheck(event ,education) {
    const checked = event.target.checked;
    checked ? props.addEducation(education) : props.deleteEducation(education.id);
   }


    return (
        <div className={styles.sec}>
            {/* Education Header */}
            <h1 className={styles.Heading}>Education</h1>
            <AddBtn text={"Add Education"} onClick={showForm}/>

            {/* Education Form */}
            {isFormVisible && <><div className={styles.Inputs}>
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
            <SaveCancelBtn onClick={saveEducation} onCancel={handleCancel} />
            </>}
            {/* End Education Form */}

            {/* Educations */}
            <div>
                {educations.map((education,index) => (
                    <div key={education.id} className={styles.prev}>
                        <div className={styles.view}>
                            <input key={index} type="checkbox" onChange={(event)=>handleCheck(event ,education)}/>
                            <div>
                                <p>
                                    {education.degree} at {education.institute} <br/>
                                    {education.city} <br/>
                                    {education.startDate} - {education.endDate} <br/>
                                </p>
                            </div>
                        </div>
                        <div className={styles.formControls}>
                            <FontAwesomeIcon icon={faPenToSquare} className={styles.edit} onClick={() => editEducation(education)} />
                            <FontAwesomeIcon icon={faTrash} className={styles.delete} onClick={() => deleteEducation(education.id)}/>
                        </div>
                    </div>
                 ))}
            </div>
            {/* End Educations */}

        </div>)
}



export default Education;
