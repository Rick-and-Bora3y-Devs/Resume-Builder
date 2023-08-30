import React, { useState } from "react";

import styles from "../Css/Resume.module.css";
import Template1 from "../Components/Templates/Template1.jsx";
import Template2 from "../Components/Templates/Template2.jsx";
import Template3 from "../Components/Templates/Template3.jsx";

function ResumeBuilder()
{

    const [template, setTemplate] = useState(1);


    return <div className={styles.Container}>
        <div className={styles.Builder}>

        </div>
        <div className={styles.Preview}>
            <div className={styles.Controls}>
                <button className={styles.Choose}>Choose Template</button>
                <button className={styles.Download}>Download As PDF</button>
            </div>
            <div className={styles.resume}>
                {template === 1 && <Template1/>}
            </div>
        </div>
    </div>


}


export default ResumeBuilder;