import React, {Component} from 'react';

class LandingPage extends Component {
    render() {
        return (
<div >
    {/** <img src="https://www.w3schools.com/css/paris.jpg"
     width="100%"
     height="700px"
     alt=""
     />**/}

    <div Style="height:50px"></div>
            <div className="container" >
                <p/>

                <div className="row">
                    <div className="col-md-6 col-sm-12  border-danger" Style="height:320px; width:100%">
                        <img
                            src={require('../images/pic1.JPG')}
                        alt="d"
                        className="img-responsive"
                            height="320px"
                            width="380px"
                            Style="border-radius:50%"
                       />
                    </div>
                    <div className="col-md-6 col-sm-12    border-danger" Style="height:; width:100%">
                        <h3>Software Developer</h3>
                        <h6>Nurhusein Abdulkader</h6>
                    </div>
                </div>

                <div Style="height:60px"></div>
                <div className="row">
                    <div className="col-6  border-danger fab fa-linkedin fa-5x" Style="height:100px; width:100%" align="right"></div>
                    <div className="col-6    border-danger fab fa-github fa-5x"  Style="height:100px; width:100%" align="left"></div>
                </div>
                <div Style="height:60px"></div>
                <div className="row">
                    <div className="col-2   border-danger fab fa-java fa-5x" Style="height:100px; width:100%"></div>
                    <div className="col-2   border-danger fab fa-js fa-5x" Style="height:100px; width:100%"></div>
                    <div className="col-2   border-danger fab fa-react fa-5x" Style="height:100px; width:100%"></div>
                    <div className="col-2   border-danger fab fa-aws fa-5x" Style="height:100px; width:100%"></div>
                    <div className="col-2   border-danger fab fa-html5 fa-5x" Style="height:100px; width:100%"></div>
                    <div className="col-2   border-danger fab fa-css3-alt fa-5x" Style="height:100px; width:100%"></div>
                </div>
            </div>
</div>

        );
    }
}

export default LandingPage;
