
//Css
import styles from "../../Css/Resume.module.css";


//Components
import SaveCancelBtn from "../saveCancelBtn.jsx";


function PersonalInfo(){

    return <>
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
        <SaveCancelBtn />
        </div>
    </>
}

export default PersonalInfo;