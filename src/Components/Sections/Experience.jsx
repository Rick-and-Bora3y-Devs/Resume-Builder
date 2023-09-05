import React, { useEffect, useReducer, useState } from "react";
import styles from "../../Css/resume.module.css";
import AddBtn from "../AddBtn.jsx";
import TextEditor from "../TextEditor";
import SaveCancelBtn from "../saveCancelBtn.jsx";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash , faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const ActionTypes = {
  AddExperience: "ADD_EXPERIENC",
  EditExperience: "EDIT_EXPERIENCE",
  DeleteExperience: "DELETE_EXPERIENCE",
};

const experienceReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.AddExperience:
      return [...state, action.payload];
    case ActionTypes.EditExperience:
      return state;
    case ActionTypes.DeleteExperience:
      return state.filter((experience) => experience.id !== action.payload.id);
    default:
      return state;
  }
};

let experienceIdCounter = 0;

function Experience(props) {

    const [isFormVisible, setFormVisible] = useState(false);
    const [experiences, dispatch] = useReducer(experienceReducer, []);
    const [formData, setFormData] = useState({
        Position: "",
        Company: "",
        Start: "",
        End: "",
        City: "",
        description: "",
    });


    const showForm = () => {
    if (!isFormVisible) {
        setFormVisible(true);
    }
    };

    const handleCancel = () => {
        setFormData({
            Position: "",
            Company: "",
            Start: "",
            End: "",
            City: "",
            description: "",
        });
        setFormVisible(false);
    };

    const deleteExperience = (id) => {
        dispatch({ type: ActionTypes.DeleteExperience, payload: { id } });
        props.deleteWork(id);
    };

    const editExperience = (experience) => {
        setFormData({ ...experience });
        showForm();
        deleteExperience(experience.id);
    };

    const saveExperience = () => {
        const id = experienceIdCounter;
        experienceIdCounter++;
        const newExperience = { id, ...formData };

        dispatch({ type: ActionTypes.AddExperience, payload: newExperience });
        handleCancel();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    function handleCheck(event, experience) {
      const checked = event.target.checked;
      checked ? props.addWork(experience) : props.deleteWork(experience.id);
    }

    function handleDescription(value) {
      setFormData((prev) => {
        return {
          ...prev,
          description: value,
        }
      })
    }

  return (<div className={styles.sec}>
      
    <h1 className={styles.Heading}>Work Experience</h1>

    <AddBtn onClick={showForm} text={experiences.length === 0 ? "Add Professional Experience" : "Add Another Experience"} />

    {isFormVisible && (
      <>
        <div className={styles.Inputs}>
                <div>
                    <label>Position</label>
                    <input 
                    type="text" 
                    name="Position" 
                    value={formData.Position} 
                    onChange={handleChange} 
                    placeholder="Position" 
                    />
                </div>

                <div>
                    <label>Company</label>
                    <input 
                    type="text" 
                    name="Company" 
                    value={formData.Company} 
                    onChange={handleChange} 
                    placeholder="Company"
                    />
                </div>

                <div className={styles.dates}>
                    <div className={styles.start}>
                        <label>Start Date</label>
                        <input 
                        type="text" 
                        name="Start" 
                        value={formData.Start} 
                        onChange={handleChange} 
                        placeholder="Start Date"
                        />
                    </div>
                    <div className={styles.end}>
                        <label>End Date</label>
                        <input 
                        type="text" 
                        name="End" 
                        value={formData.End} 
                        onChange={handleChange} 
                        placeholder="End Date" 
                        />
                    </div>
                </div>
                <div>
                    <label>City</label>
                    <input 
                    type="text" 
                    name="City" 
                    value={formData.City} 
                    onChange={handleChange} 
                    placeholder="City"
                    />
                </div>
        </div>
        <div>
          <label className={styles.descriptionLabel}>Description</label>
          <ReactQuill theme="snow" value={formData.description} onChange={handleDescription} />
        </div>
        <SaveCancelBtn onClick={saveExperience} onCancel={handleCancel} />
      </>
    )}

    <div>
      {experiences.map((experience) => (
        <div key={experience.id} className={styles.prev}>
          <div className={styles.view}>
            <input type="checkbox" onChange={(event)=>handleCheck(event, experience)}/>
            <div>
              <p>                                                                            
                {experience.Position} at {experience.Company} <br/>
                {experience.City} <br/>
                {experience.Start} - {experience.End} <br/>
                <span className={styles.para} dangerouslySetInnerHTML={{__html:experience.description}}></span>
              </p>  
            </div>
          </div>
          <div className={styles.formControls}>
            <FontAwesomeIcon icon={faPenToSquare} className={styles.edit} onClick={() => editExperience(experience)}/>
            <FontAwesomeIcon icon={faTrash} className={styles.delete} onClick={() => deleteExperience(experience.id)}/>
          </div>
        </div>
      ))}
    </div>
  </div>);

}

export default Experience;