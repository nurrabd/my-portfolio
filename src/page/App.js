import React from 'react';



import '../Style/App.css';
import Header from "../Component/Header";
import LandingPage from "../Component/LandingPage";



function App() {

  return (

    <div className="App">

            <Header/>
            <div Style="height:50px"></div>
            <LandingPage></LandingPage>
    </div>
  );
}

export default App;
