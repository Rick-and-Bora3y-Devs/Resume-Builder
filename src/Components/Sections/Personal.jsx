
//Css
import styles from "../../Css/Resume.module.css";


//Components
import SaveCancelBtn from "../saveCancelBtn.jsx";
import { useState } from "react";

function PersonalInfo(props){

    const [personalSection, setPersonalSection] = useState({
        firstName : " ",
        secondName : " ",
        email : " ",
        phoneNumber : " ",
        country : " ",
        city : " ",
        linkedIn : " ",
        website : " ",
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setPersonalSection(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function SubmitChanges() {
        props.addPersonalInfo(personalSection);
    }

    return <>
        <div className={styles.sec}>
        <h1 className={styles.Heading}>Personal Information</h1>
            <div className={styles.Inputs}>
                <div>
                    <label>First Name</label>
                    <input
                    name="firstName"
                    value={personalSection.firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="First Name"
                    required
                    />
                </div>
            
                <div>
                    <label>Second Name</label>
                    <input
                    type="text"
                    name="secondName"
                    value={personalSection.secondName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    />
                </div>
                
                <div>
                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    value={personalSection.email}
                    onChange={handleChange}
                    placeholder="Email"                        
                    />
                </div>
                
                <div>
                    <label>Phone Number</label>
                    <input
                    type="text"
                    name="phoneNumber"
                    value={personalSection.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"                        
                    />
                </div>
            
                <div>
                    <label>Country</label>
                    <input
                    type="text"
                    name="country"
                    value={personalSection.country}
                    onChange={handleChange}
                    placeholder="Country"
                    />
                </div>
            
                <div>
                    <label>City</label>
                    <input
                    type="text"
                    name="city"
                    value={personalSection.city}
                    onChange={handleChange}
                    placeholder="City"
                    /> 
                </div>
                
                <div>
                    <label>Linkedin</label>
                    <input
                    type="text"
                    name="linkedIn"
                    value={personalSection.linkedIn}
                    onChange={handleChange}
                    placeholder="Linkedin"
                    />
                </div>
            
                <div>
                    <label>Website</label>
                    <input
                    type="text"
                    name="website" 
                    value={personalSection.website} 
                    onChange={handleChange} 
                    placeholder="Website"/>       
                </div>
                        
            </div>
        <SaveCancelBtn onClick={SubmitChanges}/>
        </div>
    </>
}

export default PersonalInfo;