import React, { useReducer, useState } from "react";
import styles from "../../Css/resume.module.css";
import AddBtn from "../AddBtn.jsx";
import TextEditor from "../TextEditor";
import SaveCancelBtn from "../saveCancelBtn.jsx";
import AlertDialog from "../Dialog.jsx";


const ActionTypes = {
  AddExperience: "ADD_EXPERIENCE",
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

function Experience() {

  const [openDialog, setOpenDialog] = React.useState(false);   
  const [isFormVisible, setFormVisible] = useState(false);
  const [experiences, dispatch] = useReducer(experienceReducer, []);
  const [formData, setFormData] = useState({
    Position: "",
    Company: "",
    Start: "",
    End: "",
    City: "",
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
    });
    setFormVisible(false);
    setOpenDialog(true);
  };

  const deleteExperience = (id) => {
    dispatch({ type: ActionTypes.DeleteExperience, payload: { id } });
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
    hideForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (<div className={styles.sec}>
      
    <h1 className={styles.Heading}>Work Experience</h1>

    <AddBtn onClick={showForm} text={experiences.length === 0 ? "Add Professional Experience" : "Add Another Experience"} />

    {isFormVisible && (
      <>
        <div className={styles.Inputs}>
          <div>
            <label>Position</label>
            <input type="text" name="Position" placeholder="Position" value={formData.Position} onChange={handleChange} />
          </div>

          <div>
            <label>Company</label>
            <input type="text" name="Company" placeholder="Company" value={formData.Company} onChange={handleChange} />
          </div>

          <div className={styles.dates}>
            <div className={styles.start}>
              <label>Start Date</label>
              <input type="text" name="Start" placeholder="Start Date" value={formData.Start} onChange={handleChange} />
            </div>
            <div className={styles.end}>
              <label>End Date</label>
              <input type="text" name="End" placeholder="End Date" value={formData.End} onChange={handleChange} />
            </div>
          </div>
          <div>
            <label>City</label>
            <input type="text" name="City" placeholder="City" value={formData.City} onChange={handleChange} />
          </div>
        </div>
        <TextEditor />
        <br />
        <SaveCancelBtn onSave={saveExperience} onCancel={handleCancel} />
      </>
    )}

    <div>
      {experiences.map((experience) => (
        <div key={experience.id} className={styles.prev}>
          <input type="checkbox" />
          <div>
            <h3>
              {experience.Position} at {experience.Company}
            </h3>
            <h3>{experience.City}</h3>
            <h3>
              {experience.Start} - {experience.End}
            </h3>
          </div>
          <div className={styles.controls}>
            <button onClick={() => editExperience(experience)}>Edit</button>
            <button onClick={() => deleteExperience(experience.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>

    {/* <AlertDialog open={openDialog}/> */}

  </div>);

}

export default Experience;