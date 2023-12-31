//React Stuff
import { useState , useReducer } from "react";

//Styles
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import SaveCancelBtn from "../saveCancelBtn.jsx";

// Quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash , faPenToSquare} from "@fortawesome/free-solid-svg-icons"


const ActionTypes = {
    AddVolunteering: "ADD_Volunteering",
    DeleteVolunteering: "DELETE_Volunteering",
};
  
const volunteeringReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.AddVolunteering:
            return [...state, action.payload];
        case ActionTypes.DeleteVolunteering:
            return state.filter( volunteering => volunteering.id !== action.payload.id);
        default:
            return state;
    }
};


let volunteeringIdCounter = 0;


function Voulnteering(props){

    //States

    const [isFormVisible, setFormVisible] = useState(false);
    const [volunteerings, dispatch] = useReducer(volunteeringReducer, []);
    const [volunteeringSection, setVolunteeringSection] = useState({
        organization: "",
        involvement: "",
        startDate: "",
        endDate: "",
        description: "",
    });


    //Form Handlers

    const showForm = () => {
        if (!isFormVisible) {
            setFormVisible(true);
        }
    };
    
    const handleCancel = () => {
        setVolunteeringSection({
            organization: "",
            involvement: "",
            startDate: "",
            endDate: "",
        });
        setFormVisible(false);
    };

    //Volunteering Handlers

    const deleteVolunteering = (id) => {
        dispatch({ type: ActionTypes.DeleteVolunteering, payload: { id } });
        props.deleteVolunteering(id);
    };
    
    const editVolunteering = (volunteering) => {
        setVolunteeringSection({ ...volunteering });
        showForm();
        deleteVolunteering(volunteering.id);
    };
    
    const saveVolunteering = () => {
        const id = volunteeringIdCounter;
        volunteeringIdCounter++;
        const newVolunteering = { id, ...volunteeringSection };

        dispatch({ type: ActionTypes.AddVolunteering, payload: newVolunteering });
        handleCancel();
    };


    function handleChange(event) {
        const {name, value} = event.target;

        setVolunteeringSection(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function handleCheck(event, volunteering) {
        const checked = event.target.checked;
        if (checked) {
            props.addVolunteering(volunteering);
        } else { 
            props.deleteVolunteering(volunteering.id)};
    }

    function handleDescription(value) {
        setVolunteeringSection((prev) => {
          return {
            ...prev,
            description: value,
          }
        })
    }

    return <div className={styles.sec}>    
        {/* Volunttering Header */}
        <h1 className={styles.Heading}>Volunteering</h1>
        <AddBtn text={"Add Experience"} onClick={showForm}/>

        {/* Volunteering Section */}
        { isFormVisible && <> <div className={styles.Inputs}>
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
                value={volunteeringSection.involvement}
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
        <div>
          <label className={styles.descriptionLabel}>Description</label>
          <ReactQuill theme="snow" value={volunteeringSection.description} onChange={handleDescription} />
        </div>
        <SaveCancelBtn onClick={saveVolunteering} onCancel={handleCancel}/> </>}

        {/* Volunteerings */}

        <div>
            {volunteerings.map((volunteering) => (
                <div key={volunteering.id} className={styles.prev}>
                    <div className={styles.view}>
                        <input type="checkbox" onChange={(event)=>handleCheck(event, volunteering)} />
                        <div>
                            <p>
                                {volunteering.organization} at {volunteering.involvement} <br/>
                                {volunteering.startDate} - {volunteering.endDate} <br/>
                                <span className={styles.para} dangerouslySetInnerHTML={{__html:volunteering.description}} />
                            </p>
                        </div>
                    </div>
                    <div className={styles.formControls}>
                        <FontAwesomeIcon icon={faPenToSquare} className={styles.edit} onClick={() => editVolunteering(volunteering)}/>
                        <FontAwesomeIcon icon={faTrash} className={styles.delete} onClick={() => deleteVolunteering(volunteering.id)}/>
                    </div>
                </div>
            ))}
        </div>


    </div>
}

export default Voulnteering;