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

               <h3 className="focus-in-contract-bck " Style="font-family:Roboto; "> WE MAKE IT HAPPEN</h3>

            </div>
            <h5></h5>
            {/** <Header/>
             <LandingPage/>
             <Portofolio/>
             <AboutMe/>
             <ContactMe/>**/}
<div className="row justify-content-center">
    <div className="col-md-6"> <div className="typewriter">
        <h6>website under construction</h6>
    </div>
    </div>

</div>




        </div>
    );
}

export default App;
