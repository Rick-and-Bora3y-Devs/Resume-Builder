import { useState } from "react";

import AddBtn from "../Components/AddBtn.jsx";
import styles from "../Css/Resume.module.css";
import Template1 from "../Components/Templates/Template1.jsx";
import Template2 from "../Components/Templates/Template2.jsx";
import Template3 from "../Components/Templates/Template3.jsx";

function ResumeBuilder()
{

    const [template, setTemplate] = useState(1);


    return <div className={styles.Container}>
                <div className={styles.Builder}>
                    <div className={styles.sec}>
                        <h1 className={styles.Heading}>Personal Information</h1>
                            <div className={styles.Inputs}>
                                <div>
                                    <label>First Name</label>
                                    <input name="First Name" type="text" placeholder="First Name"/>
                                </div>
                               
                                <div>
                                    <label>Second Name</label>
                                    <input type="text" placeholder="Last Name"/>
                                </div>
                                
                                <div>
                                    <label>Email</label>
                                    <input type="text" placeholder="Email"/>
                                </div>
                                
                                <div>
                                    <label>Phone Number</label>
                                    <input type="text" placeholder="Phone Number"/>
                                </div>
                               
                               <div>
                                    <label>Country</label>
                                    <input type="text" placeholder="Country"/>
                               </div>
                               
                               <div>
                                    <label>City</label>
                                    <input type="text" placeholder="City"/> 
                               </div>
                                
                                <div>
                                    <label>Linkedin</label>
                                    <input type="text" placeholder="Linkedin"/>
                                </div>
                               
                               <div>
                                    <label>Website</label>
                                    <input type="text" placeholder="Website"/>       
                               </div>
                                           
                            </div>
                    </div>
                    
                    
                    <div className={styles.sec}>
                        <h1 className={styles.Heading}>Professional Summaries</h1>
                        <AddBtn/>
                    </div>



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