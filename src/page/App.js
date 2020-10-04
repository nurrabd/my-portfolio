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

        <div className="App " style={{background: 'url(https://goteborgco.se/wp-content/uploads/2019/12/utsikt-167-11-2048x948.jpg) center / cover', height:'800px'}}>
<div className="row justify-content-center">
    <img src={require("../images/logo1.png")} alt=""/>
</div>
            <div className="row justify-content-center">

               <h3 className="focus-in-contract-bck " Style="font-family:Roboto; color: white"> WE MAKE IT HAPPEN</h3>

            </div>
            <h5></h5>
            {/** <Header/>
             <LandingPage/>
             <Portofolio/>
             <AboutMe/>
             <ContactMe/>**/}
<div className="row justify-content-center">
    <div className="col-md-6"  Style="font-family:Roboto; color: white"> <div className="typewriter">
        <h4>website under construction</h4>
    </div>
    </div>

</div>




        </div>
    );
}

export default App;
