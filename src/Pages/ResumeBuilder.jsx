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
                        <AddBtn text={"Add Professional Summary"}/>
                    </div>


                    <div className={styles.sec}>
                        <h1 className={styles.Heading}>Work Experience</h1>
                        <AddBtn text={"Add Professional Experience"}/>

                        <div>
                            <label>Position</label>
                            <input type="text" placeholder="Position" />
                        </div>

                        <div>
                            <label>Degree</label>
                            <input type="text" placeholder="Degree" />
                        </div>

                        <div>
                            <div>
                                <label>Start Date</label>
                                <input type="text" placeholder="Start Date" />
                            </div>
                            <div>
                                <label>End Date</label>
                                <input type="text" placeholder="End Date" />
                            </div>
                        </div>

                        <div>
                            <label>City</label>
                            <input type="text" placeholder="City" />
                        </div>                        
                    </div>


                    <div className={styles.sec}>
                        <h1 className={styles.Heading}>Education</h1>
                        <AddBtn text={"Add Education"}/>
                    </div>

                    <div className={styles.sec}>
                        <h1 className={styles.Heading}>Languages</h1>
                        <AddBtn text={"Add Language"}/>
                        <div>
                            <label>Language</label>
                            <input type="text" placeholder="Language" />
                        </div>

                        <div>
                            <label>Proficiency</label>
                            <input type="text" placeholder="Proficiency" />
                        </div>
                    </div>

                <div className={styles.sec}>
                    <h1 className={styles.Heading}>Certifications</h1>
                    <AddBtn text={"Add Certification"}/>
                    <div>
                        <label>Certification</label>
                        <input type="text" placeholder="Certification" />
                    </div>

                    <div>
                        <label>Provider</label>
                        <input type="text" placeholder="Provider" />
                    </div>

                    <div>
                        <label>Start Date</label>
                        <input type="text" placeholder="Start Date" />
                    </div>

                    <div>
                        <label>End Date</label>
                        <input type="text" placeholder="End Date" />
                    </div>
                </div>

                <div className={styles.sec}>
                    <h1 className={styles.Heading}>Courses</h1>
                    <AddBtn text={"Add A Course"}/>
                    <div>
                        <label>Course</label>
                        <input type="text" placeholder="Course" />
                    </div>

                    <div>
                        <label>Provider</label>
                        <input type="text" placeholder="Provider" />
                    </div>

                    <div>
                        <label>Start Date</label>
                        <input type="text" placeholder="Start Date" />
                    </div>

                    <div>
                        <label>End Date</label>
                        <input type="text" placeholder="End Date" />
                    </div>
                </div>
            

                <div className={styles.sec}>
                    <h1 className={styles.Heading}>Projects</h1>
                    <AddBtn text={"Add A Project"}/>
                    <div>
                        <label>Project</label>
                        <input type="text" placeholder="Course" />
                    </div>

                    <div>
                        <label>Organization</label>
                        <input type="text" placeholder="Provider" />
                    </div>

                    <div>
                        <label>Start Date</label>
                        <input type="text" placeholder="Start Date" />
                    </div>

                    <div>
                        <label>End Date</label>
                        <input type="text" placeholder="End Date" />
                    </div>
                </div>

                
                <div className={styles.sec}>
                    <h1 className={styles.Heading}>Volunteering</h1>
                    <AddBtn text={"Add Experience"}/>
                    <div>
                        <label>Organization</label>
                        <input type="text" placeholder="Course" />
                    </div>

                    <div>
                        <label>Involvment</label>
                        <input type="text" placeholder="Provider" />
                    </div>

                    <div>
                        <label>Start Date</label>
                        <input type="text" placeholder="Start Date" />
                    </div>

                    <div>
                        <label>End Date</label>
                        <input type="text" placeholder="End Date" />
                    </div>
                </div>

                <div className={styles.sec}>
                    <h1 className={styles.Heading}>Skills</h1>
                    <AddBtn text={"Add A Skill"}/>
                    <div>
                        <label>New Skill</label>
                        <input type="text"/>
                    </div>
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