import React from 'react';
import {Link, useParams} from "react-router-dom";
import posts from '../../data/posts.json';

//logt niet op de site, manier h1 en manier h2 +p ook niet waarom niet?

const BlogPost = () => {
    const {blogId} = useParams();
    /*console.log(posts)*/
    const postName = posts.find((post) =>{
        return post.id === blogId
    })

    return (
        <>
            <article>
             <h1>{postName.title}</h1>
               <h2>{postName.date}</h2>
                <p>{postName.content}</p>
                <Link to="/">Terug naar de Homepage</Link>
            </article>
        </>
    );
};

export default BlogPost;
