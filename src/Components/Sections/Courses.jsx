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

const ActionTypes = {
    AddCourse: "ADD_COURSE",
    DeleteCourse: "DELETE_COURSE",
};

const coursesReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.AddCourse:
            return [...state, action.payload];
        case ActionTypes.DeleteCourse:
            return state.filter((course) => course.id !== action.payload.id);
        default:
            return state;
    }
};

let courseIdCounter = 0;


function Courses(props) {

    //States

    const [isFormVisible, setFormVisible] = useState(false);
    const [courses, dispatch] = useReducer(coursesReducer, []);
    const [coursesSection, setCoursesSection] = useState({
        course: "",
        provider: "",
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
        setCoursesSection({
            course: "",
            provider: "",
            startDate: "",
            endDate: "",
        });
        setFormVisible(false);
    };

    //Courses Handlers

    const deleteCourse = (id) => {
        dispatch({ type: ActionTypes.DeleteCourse, payload: { id } });
        props.deleteCourse(id);
    };
    
    const editCourse = (course) => {
        setCoursesSection({ ...course });
        showForm();
    };
    
    const saveCourse = () => {
        const id = courseIdCounter;
        courseIdCounter++;
        const newCourse = { id, ...coursesSection };

        dispatch({ type: ActionTypes.AddCourse, payload: newCourse });
        handleCancel();
    };


    function handleChange(event) {
        const {name, value} = event.target;

        setCoursesSection(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function handleCheck(event, course) {
        const checked = event.target.checked;
        if (checked) {
            props.addCourses(course);
        } else { 
            props.deleteCourse(course.id)};
    }

    function handleDescription(value) {
        setCoursesSection((prev) => {
          return {
            ...prev,
            description: value,
          }
        })
    }

    return (
        <div className={styles.sec}>
        <h1 className={styles.Heading}>Courses</h1>

        {/* Courses Form */}
        <AddBtn text={"Add A Course"} onClick={showForm}/>
        { isFormVisible && <> <div className={styles.Inputs}>
            <div>
                <label>Course</label>
                <input 
                type="text" 
                value={coursesSection.course} 
                name="course" 
                onChange={handleChange} 
                placeholder="Course" 
                />
            </div>

            <div>
                <label>Provider</label>
                <input 
                type="text" 
                value={coursesSection.provider} 
                name="provider" 
                onChange={handleChange} 
                placeholder="Provider"
                />
            </div>

            <div>
                <label>Start Date</label>
                <input 
                type="month" 
                value={coursesSection.startDate} 
                name="startDate" 
                onChange={handleChange} 
                placeholder="Start Date"  
                />
            </div>

            <div>
                <label>End Date</label>
                <input
                type="month"
                value={coursesSection.endDate}
                name="endDate"
                onChange={handleChange}
                placeholder="End Date"   
                />
            </div>
        </div>
        <div>
          <label className={styles.descriptionLabel}>Description</label>
          <ReactQuill theme="snow" value={coursesSection.description} onChange={handleDescription} />
        </div>

        <SaveCancelBtn onClick={saveCourse} onCancel={handleCancel}/> </>}

        {/* Courses */}

        <div>
            {courses.map((course) => (
                <div key={course.id} className={styles.prev}>
                <input type="checkbox" onChange={(event)=>handleCheck(event, course)}/>
                <div>
                    <h3>
                        {course.course} at {course.provider}
                    </h3>
                    <h3>
                        {course.startDate} - {course.endDate}
                    </h3>
                </div>
                <div className={styles.formControls}>
                    <button className={styles.editBtn} onClick={() => editCourse(course)}>Edit</button>
                    <button className={styles.deleteBtn} onClick={() => deleteCourse(course.id)}>Delete</button>
                </div>
                </div>
            ))}
        </div>



    </div>)
}


export default Courses;