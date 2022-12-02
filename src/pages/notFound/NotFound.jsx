import React from 'react';
import {useNavigate} from "react-router-dom";


const NotFound = () => {
    const navigate = useNavigate()
    setTimeout(() => {
        navigate("/")
    }, 3000)

    return (
        <>
            <h1>This page doesn't exist</h1>
            <p>You will be redirected to the homepage in 3 seconds</p>
        </>
    );
};

export default NotFound;