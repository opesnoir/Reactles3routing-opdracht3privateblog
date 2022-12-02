import React from 'react';
import './BlogOverzicht.module.css';
import {Link, useParams} from "react-router-dom";
import posts from "../../data/posts.json"

const BlogOverzicht = () => {

    return (
        <>
            <h1>Blog overzichtspagina </h1>
            <h1>Aantal blogposts: {posts.length}  </h1>
            <br/>
            <ul>
                {posts.map((post) => {
                        return (
                            <li key={post.id}>
                                <Link to={"/blogposts/" + post.id}>{post.title}
                                    ></Link>
                            </li>)
                    }
                )}
            </ul>
        </>
    );
};

export default BlogOverzicht;