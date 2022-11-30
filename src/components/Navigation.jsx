import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Navigation.module.css";

function Navlink(props) {
    return null;
}

function Navigation(props) {
    return (
        <>
            <nav className={styles["navigationContainer"]}>
                <ul className={styles["navigationContent"]}>
                    <li className={styles["navigationItem"]}><NavLink
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
                    <li className={styles["navigationItem"]}>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to={"/blogposts"}>
                            Blog overzicht
                        </NavLink>
                    </li>
                    <li className={styles["navigationItem"]}>
                        <NavLink
                            className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            to={"/blogposts/:blogId"}>
                            Blog post
                        </NavLink>
                    </li>
                </ul>
                <ul className={styles["navigationButtonContent"]}>
                    <li className={styles["navigationButtonItem"]}>
                        <button className={styles["navigationButtonItem"]}>Login</button>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;