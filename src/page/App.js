import React from 'react';



import '../Style/App.css';
import Header from "../Component/Header";
import LandingPage from "../Component/LandingPage";
import Portofolio from "../Component/Portofolio";
import ContactMe from "../Component/ContactMe";
import AboutMe from "../Component/AboutMe";
import Dialog from "../Component/Dialog";




function App() {

    return (

        <div className="App container">
<div className="row justify-content-center">
    <img src={require("../images/logo1.png")} alt=""/>
</div>
            <div className="row justify-content-center">

               <h3 className="focus-in-contract-bck" Style="font-family:Roboto; "> WE MAKE IT HAPPEN</h3>

            </div>
            <h5></h5>
            {/** <Header/>
             <LandingPage/>
             <Portofolio/>
             <AboutMe/>
             <ContactMe/>**/}

            <div className="typewriter">
                <h1>website under construction</h1>
            </div>

            <h1>
                <a href="" className="typewrite" data-period="2000"
                   data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
                    <span className="wrap"></span>
                </a>
            </h1>


        </div>
    );
}

export default App;
