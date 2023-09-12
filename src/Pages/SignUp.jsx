import React from "react";
import styles from "../Css/Forms.module.css"
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h1>Sign Up</h1>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link className={styles.login} to={"/Login"}>Login</Link></p>
            </form>
        </div>
    );
}

export default SignUp;