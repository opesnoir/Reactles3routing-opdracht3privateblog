import React from 'react';
import {NavLink} from "react-router-dom";

function Navlink(props) {
    return null;
}

function Navigation(props) {
    return (
        <>
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to={"/"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to={"/login"}>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to={"/blogposts"}>
                        Blog overzicht
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to={"/blogposts/:blogId"}>
                        Blog post
                    </NavLink>
                </li>
            </ul>
        </>
    );
}

export default Navigation;