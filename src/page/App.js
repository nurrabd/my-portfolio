import React from 'react';



import '../Style/App.css';
import Header from "../Component/Header";
import LandingPage from "../Component/LandingPage";
import Portofolio from "../Component/Portofolio";



function App() {

  return (

    <div className="App">

            <Header/>

            <LandingPage></LandingPage>
        <Portofolio/>
    </div>
  );
}

export default App;
