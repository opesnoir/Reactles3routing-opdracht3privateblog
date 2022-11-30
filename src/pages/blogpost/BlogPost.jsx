import React from 'react';
import {Link} from "react-router-dom";

const BlogPost = () => {
    return (
        <>
            <h1>Blogpost + titel </h1>
            <br/>
            <h2>Jaar datum en tijd </h2>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti facilis impedit nihil repellendus
                voluptas? Accusantium adipisci aperiam commodi exercitationem incidunt porro sint. Exercitationem,
                facilis ipsam necessitatibus nulla repellendus rerum voluptatibus.</p>
        <Link to="/">Terug naar de Homepage</Link>
        </>

    );
};

export default BlogPost;