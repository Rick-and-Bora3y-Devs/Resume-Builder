// React Stuff
import { useState , useReducer } from "react";

//Styles
import styles from "../../Css/resume.module.css";

//Components
import AddBtn from "../AddBtn.jsx";
import SaveCancelBtn from "../saveCancelBtn.jsx";

// Quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ActionTypes = {
    AddProject: "ADD_Project",
    DeleteProject: "DELETE_Project",
};
  
const projectsReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.AddProject:
            return [...state, action.payload];
        case ActionTypes.DeleteProject:
            return state.filter((project) => project.id !== action.payload.id);
        default:
            return state;
    }
};

let projectIdCounter = 0;


function Projects(props){

    
    //States

    const [isFormVisible, setFormVisible] = useState(false);
    const [projects, dispatch] = useReducer(projectsReducer, []);
    const [projectsSection, setProjectsSection] = useState({
        project: "",
        organization: "",
        startDate: "",
        endDate: "",
    });


    //Form Handlers

    const showForm = () => {
        if (!isFormVisible) {
            setFormVisible(true);
        }
    };
    
    const handleCancel = () => {
        setProjectsSection({
            project: "",
            organization: "",
            startDate: "",
            endDate: "",
        });
        setFormVisible(false);
    };

    //Education Handlers

    const deleteProject = (id) => {
        dispatch({ type: ActionTypes.DeleteProject, payload: { id } });
        props.deleteProject(id);
    };
    
    const editProject = (project) => {
        setProjectsSection({ ...project });
         showForm();
        deleteProject(project.id);
    };
    
    const saveProject = () => {
        const id = projectIdCounter;
        projectIdCounter++;
        const newProject = { id, ...projectsSection };

        dispatch({ type: ActionTypes.AddProject, payload: newProject });
        handleCancel();
    };



    function handleChange(event) {
        const {name, value} = event.target;

        setProjectsSection(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function handleCheck(event, project) {
        const checked = event.target.checked;
        checked ? props.addProjects(project) : props.deleteProject(project.id);
    }

    function handleDescription(value) {
        setProjectsSection((prev) => {
          return {
            ...prev,
            description: value,
          }
        })
    }

    return  <div className={styles.sec}>

            {/* Projects Header */}
                <h1 className={styles.Heading}>Projects</h1>
                <AddBtn text={"Add A Project"} onClick={showForm}/>

            {/* Project Form */}
                {isFormVisible && (<><div className={styles.Inputs}>
                    <div>
                        <label>Project</label>
                        <input 
                        type="text" 
                        onChange={handleChange} 
                        name="project" 
                        value={projectsSection.project} 
                        placeholder="Project"
                        />
                    </div>

                    <div>
                        <label>Organization</label>
                        <input 
                        type="text" 
                        onChange={handleChange} 
                        name="organization" 
                        value={projectsSection.organization} 
                        placeholder="Organization"
                        />
                    </div>

                    <div>
                        <label>Start Date</label>
                        <input 
                        type="text" 
                        onChange={handleChange} 
                        name="startDate" 
                        value={projectsSection.startDate} 
                        placeholder="Start Date"
                        />
                    </div>

                    <div>
                        <label>End Date</label>
                        <input 
                        type="text" 
                        onChange={handleChange} 
                        name="endDate" 
                        value={projectsSection.endDate} 
                        placeholder="End Date" 
                        />
                    </div>

                </div>
                <div>
                    <label className={styles.descriptionLabel}>Description</label>
                    <ReactQuill theme="snow" value={projectsSection.description} onChange={handleDescription} />
                </div>
                <SaveCancelBtn onClick={saveProject} onCancel={handleCancel} />
                </>)}

            {/* Projects */}

                <div>
                {projects.map((project) => (
                    <div key={project.id} className={styles.prev}>
                    <input type="checkbox" onChange={(event)=>handleCheck(event, project)} />
                    <div>
                        <h3>
                            {project.project} at {project.organization}
                        </h3>
                        <h3>
                            {project.startDate} - {project.endDate}
                        </h3>
                    </div>
                    <div className={styles.formControls}>
                        <button className={styles.editBtn} onClick={() => editProject(project)}>Edit</button>
                        <button className={styles.deleteBtn} onClick={() => deleteProject(project.id)}>Delete</button>
                    </div>
                    </div>
                ))}
                </div>

            </div> 
}

export default Projects;