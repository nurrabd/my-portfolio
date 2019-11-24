import React from 'react';



import '../Style/App.css';
import Header from "../Component/Header";
import LandingPage from "../Component/LandingPage";
import Portofolio from "../Component/Portofolio";
import ContactMe from "../Component/ContactMe";
import AboutMe from "../Component/AboutMe";



function App() {

    return (

        <div className="App">

            <Header/>
            <LandingPage/>
            <Portofolio/>
            <AboutMe/>
        </div>
    );
}

export default App;
