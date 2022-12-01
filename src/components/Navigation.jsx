import React from 'react';
import styles from "./Navigation.module.css";
import {NavLink, useNavigate} from "react-router-dom";

const Navigation = ({auth, setAuth}) => {

    const navigate = useNavigate()

    return (
        <>
            <nav className={styles["navigationContainer"]}>
                <ul className={styles["navigationContent"]}>
                    <li className={styles["navigationItem"]}>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li className={styles["navigationItem"]}>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to={"/login"}>
                            Login
                        </NavLink>
                    </li>
                    {auth && <li className={styles["navigationItem"]}>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to={"/blogposts"}>
                            Blog overzicht
                        </NavLink>
                    </li>}
                    {auth && <li className={styles["navigationItem"]}>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to={"/blogposts/:blogId"}>
                            Blog post
                        </NavLink>
                    </li>}
                </ul>
                <ul className={styles["navigationButtonContent"]}>
                    <li className={styles["navigationButtonItem"]}>
                        <button type="button" onClick={() => setAuth(true)}>Login</button>
                        <button type="button" onClick={() => setAuth(false)}>Logout</button>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;