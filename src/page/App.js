import React from 'react';



import '../Style/App.css';
import Header from "../Component/Header";
import LandingPage from "../Component/LandingPage";
import Portofolio from "../Component/Portofolio";
import ContactMe from "../Component/ContactMe";
import AboutMe from "../Component/AboutMe";
import Dialog from "../Component/Dialog";
import divWithClassName from "react-bootstrap/es/utils/divWithClassName";
import Footer from "../Component/Footr";




function App() {

    return (
        <div>

            <Header/>
            <LandingPage/>
            <Portofolio/>
            <AboutMe/>
            <ContactMe/>
            <Footer/>


        </div>


    );
}

export default App;
