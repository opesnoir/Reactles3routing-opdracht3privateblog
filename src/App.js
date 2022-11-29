import React, { useState } from 'react';
import './App.css';
import {Router} from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    return (
        <>
            <div>
                Maak hier jouw prachtige blog-applicatie!
            </div>
            <Navigation/>
        </>
    );
}

export default App;
