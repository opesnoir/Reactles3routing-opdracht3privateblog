import React from 'react';
import styles from "../../components/Navigation.module.css";

const Login = () => {
    return (
        <>
            <h1>Login pagina </h1>
            <br/>
            <p>Druk op de knop om je in te loggen!</p>
            <br/>
            <button className={styles["navigationButtonItem"]} >Login</button>
        </>
    );
};

export default Login;