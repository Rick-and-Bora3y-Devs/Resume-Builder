//React Stuff
import { useState , useReducer } from "react";

//Styles
import styles from "../../Css/Resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import SaveCancelBtn from "../saveCancelBtn.jsx";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash , faPenToSquare } from "@fortawesome/free-solid-svg-icons";


const ActionTypes = {
    AddLanguage: "ADD_Language",
    DeleteLanguage: "DELETE_Language",
};
  
const educationReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.AddLanguage:
            return [...state, action.payload];
        case ActionTypes.DeleteLanguage:
            return state.filter((language) => language.id !== action.payload.id);
        default:
            return state;
    }
};


let languageIdCounter = 0;

function Languages(props){


    //States

    const [isFormVisible, setFormVisible] = useState(false);
    const [languages, dispatch] = useReducer(educationReducer, []);
    const [allLanguages, setAllLanguages] = useState([]);
    const [languagesSection, setLanguagesSection] = useState({
        language: " ",
        proficiency: " "
    });


    //Form Handlers

    const showForm = () => {
        if (!isFormVisible) {
            setFormVisible(true);
        }
    };
    
    const handleCancel = () => {
        setLanguagesSection({
            language: " ",
            proficiency: " "
        });
        setFormVisible(false);
    };

    //Education Handlers

    const deleteLanguage = (id) => {
        dispatch({ type: ActionTypes.DeleteLanguage, payload: { id } });
        props.deleteLanguage(id);
    };
    
    const editLanguage = (language) => {
        setLanguagesSection({ ...language });
        showForm();
        deleteLanguage(language.id);
       
    };
    
    const saveLanguage = () => {
        const id = languageIdCounter;
        languageIdCounter++;
        const newLanguage = { id, ...languagesSection };

        dispatch({ type: ActionTypes.AddLanguage, payload: newLanguage });
        handleCancel();
    };

    function handleChange(event) {
        const {name, value} = event.target;

        setLanguagesSection(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function handleCheck(event ,language) {
        const checked = event.target.checked;
        if (checked) {
            props.addLanguages(language);
        } else { 
            props.deleteLanguage(language.id)};
    }
    

      return <div className={styles.sec}>

        {/* Languages Header */}
            <h1 className={styles.Heading}>Languages</h1>

            <AddBtn text={"Add Language"} onClick={showForm}/>

        {/* Languages Form */}
            {isFormVisible && <><div className={styles.Inputs}>
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
            <SaveCancelBtn onClick={saveLanguage} onCancel={handleCancel} /> </>}

        {/* Languages */}

        <div>
            {languages.map((language) => (
                <div key={language.id} className={styles.prev}>
                    <div  className={styles.view}>
                        <input className={styles.checkbox} type="checkbox" onChange={(event) => handleCheck(event, language)} />
                        <div>
                            <p>
                                {language.language} at {language.proficiency}
                            </p>
                        </div>
                    </div>
                    <div className={styles.formControls}>
                            <FontAwesomeIcon icon={faPenToSquare} className={styles.edit} onClick={() => editLanguage(language)} /> 
                            <FontAwesomeIcon icon={faTrash} className={styles.delete} onClick={() => deleteLanguage(language.id)} />
                    </div>
                </div>
            ))}
        </div>





        </div>
}

export default Languages;