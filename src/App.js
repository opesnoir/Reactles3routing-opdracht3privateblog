import React, { useState } from 'react';
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import BlogOverzicht from "./pages/blogoverzicht/BlogOverzicht";
import BlogPost from "./pages/blogpost/BlogPost";
import NotFound from "./pages/notFound/NotFound";


// stappen:
//1. maak een navigatie component;
//2. maak de vier pagina's in een anonieme functie aan en wikkel ze in App.js in Routes>Route;

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [auth, setAuth ] = useState(false);



    return (


        <>
            <Navigation auth={auth} setAuth={setAuth}/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/blogposts" element={ <BlogOverzicht/> }/>
                <Route path="/blogposts/:blogId" element={ auth ? <BlogPost/> : <Navigate to="/login"/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
