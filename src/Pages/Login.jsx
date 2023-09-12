import React from "react";
import { Link } from "react-router-dom";
import styles from "../Css/Forms.module.css"

function Login() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h1>Login</h1>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to={"/signUp"} className={styles.signUp} >Sign Up now</Link></p>
            </form>
        </div>
    );
}

export default Login;