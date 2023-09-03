//Styles
import { useState } from "react";
import styles from "../../Css/resume.module.css";

//Components
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SaveCancelBtn from "../saveCancelBtn.jsx";

function Summary(props){
    const [value, setValue] = useState('');

    function submitChanges() {
        props.addSummary(value);
        console.log(value);
    }

    function handleCancel() {
        setValue("");
        props.deleteSummary();
    }
    return(
            <div className={styles.sec}>
                <h1 className={styles.Heading}>Professional Summaries</h1>
                <ReactQuill theme="snow" value={value} onChange={setValue} />
                <br />
                <SaveCancelBtn onClick={submitChanges} onCancel={handleCancel}/>
            </div>
    )
}


export default Summary;