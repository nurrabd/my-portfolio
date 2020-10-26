import React, {Component} from 'react';

class NorrsonsIt extends Component {
    render() {
        return (
            <div>
                <div className="App " style={{background: 'url(https://goteborgco.se/wp-content/uploads/2019/12/utsikt-167-11-2048x948.jpg) center / cover', height:'800px'}}>
                 <div className="container">
                 <div className="row justify-content-center">
                 <img src={require("../images/logo1.png")} alt=""/>
                 </div>
                 <div className="row justify-content-center">

                 <h3 className="focus-in-contract-bck " Style="font-family:Roboto; color: white"> WE MAKE IT HAPPEN</h3>

                 </div>
                 <h5></h5>

                 <div className="row justify-content-center">
                 <div className="col-md-6"  Style="font-family:Roboto; color: white"> <div className="typewriter">
                 <h4>website under construction</h4>
                 </div>
                 </div>

                 </div>



                 </div>
                 </div>
            </div>
        );
    }
}

export default NorrsonsIt;
