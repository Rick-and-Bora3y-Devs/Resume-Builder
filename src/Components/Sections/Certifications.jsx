//React
import { useState , useReducer } from "react";

//Styles
import styles from "../../Css/resume.module.css";


//Components
import AddBtn from "../AddBtn.jsx";
import SaveCancelBtn from "../saveCancelBtn.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash , faPenToSquare } from "@fortawesome/free-solid-svg-icons";


const ActionTypes = {
    AddCertificate: "ADD_Certificate",
    DeleteCertificate: "DELETE_Certificate",
};


const certificateReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.AddCertificate:
            return [...state, action.payload];
        case ActionTypes.DeleteCertificate:
            return state.filter((certificate) => certificate.id !== action.payload.id);
        default:
            return state;
    }
};



let certificateIdCounter = 0;


function Certifactes(props){

    //States

    const [isFormVisible, setFormVisible] = useState(false);
    const [certificates, dispatch] = useReducer(certificateReducer, []);
    const [certificationsSection, setCertificationsSection] = useState({
        certification: " ",
        provider: " ",
        startDate: " ",
        endDate: " ",
    });

    //Form Handlers

    const showForm = () => {
        if (!isFormVisible) {
            setFormVisible(true);
        }
    };
    
    const handleCancel = () => {
        setCertificationsSection({
            certification: " ",
            provider: " ",
            startDate: " ",
            endDate: " ",
        })
        setFormVisible(false);
    };

    //Certifiacte Handlers

    const deleteCertificate = (id) => {
        dispatch({ type: ActionTypes.DeleteCertificate, payload: { id } });
        props.deleteCertification(id);
    };
    
    const editCertificate = (certificate) => {
        setCertificationsSection({ ...certificate });
        showForm();
        deleteCertificate(certificate.id);
    };
    
    const saveCertificate = () => {
        const id = certificateIdCounter;
        certificateIdCounter++;
        const newCertificate = {id , ...certificationsSection};

        dispatch({ type: ActionTypes.AddCertificate, payload: newCertificate });
        handleCancel();
    };



    function handleChange(event) {
        const {name, value} = event.target;

        setCertificationsSection(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function handleCheck(event, certificate) {
        const checked = event.target.checked;
        checked ? props.addCertifications(certificate) : props.deleteCertification(certificate.id);
      }

    return   <div className={styles.sec}>

        {/* Certificates Header  */}
                <h1 className={styles.Heading}>Certifications</h1>
                <AddBtn text={"Add Certification"} onClick={showForm}/>


        {/* Certificates Form */}
               {isFormVisible && <><div className={styles.Inputs}>
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
                        type="text"
                        onChange={handleChange}
                        value={certificationsSection.endDate}
                        name="endDate"
                        placeholder="End Date"
                        />
                    </div>
                </div>
                <SaveCancelBtn onClick={saveCertificate} onCancel={handleCancel}/> </>}


                {/* Certificates */}

                <div>
                    {certificates.map((certificate) => (
                        <div key={certificate.id} className={styles.prev}>
                        <div className={styles.view}>
                            <input type="checkbox" onChange={(event)=>handleCheck(event, certificate)} />
                            <div>
                                <p>
                                    {certificate.certification} at {certificate.provider} <br/>
                                    {certificate.startDate} - {certificate.endDate}
                                </p>
                            </div>
                        </div>
                        <div className={styles.formControls}>
                            <FontAwesomeIcon icon={faPenToSquare} className={styles.edit} onClick={() => editCertificate(certificate)} /> 
                            <FontAwesomeIcon icon={faTrash} className={styles.delete} onClick={() => deleteCertificate(certificate.id)} />
                        </div>
                        </div>
                    ))}
                </div>


            </div>
}


export default Certifactes;