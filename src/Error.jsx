import React from "react";
import {Link} from "react-router-dom";

//CSS
import styles from "./Css/error.module.css";

//Assets
import four from "./Assets/four.svg"
import avatar from "./Assets/Goodies Danger.svg"
import Hey from "./Assets/Hey.svg"


function Error(){
    return (
        <div className={styles.Error}>
            <img src={Hey}></img>
            <p className={styles.para}>What Are You Doing Here?!<br/>You should be making your cv!</p>
            <div className="Image">
                <img src={four} className={styles.four}/>
                <img src={avatar} className={styles.avatar}/>
                <img src={four} className={styles.four}/> 
            </div>
            <Link to="/" className={styles.btn}>Go Home</Link> 
        </div>
    )
}


export default Error;