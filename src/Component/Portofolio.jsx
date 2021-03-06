import React, {Component} from 'react';

class Portofolio extends Component {
    render() {
        return (
            <div style={{background: "url(../../images/logo.png) top / cover"}}>
            <div className="container" id="project">
                <div Style="height:50px"></div>
                <h2 align="center"> Projects</h2>
                <div Style="height:50px"></div>
                <div className="row">
                    <div className="col-md-4 col-sm-6" >
                        <div className="card shadow" Style="width: 100%; height:120%">
                            <img src="https://s3-eu-west-1.amazonaws.com/tt-screenshots/74d16d69-88e4-4718-83cf-d33b885cd642-facebook.png?update=1565166811" className="card-img-top" alt="..."/>
                          {/*      <div className="card-body">
                                    <h5 className="card-title">Resume generator</h5>
                                    <p className="card-text"></p>
                                    <hr/>
                                    <p>
                                        <br/>
                                        <i className="fab fa-react fa-2x"></i>  <i className="fab fa-java fa-2x"></i>
                                    </p>
                                    <a href="https://github.com/cebed/Resume-Generator-Backend" className="fab fa-github fa-2x" Style="padding:20px"> </a>
                                    <a href="https://github.com/cebed/ResumeGenerator-ReactFrontend/blob/master/LMTX38_Examensarbete2019-nyversion.pdf" className="fas fa-file-word fa-2x" Style="padding:20px"></a>
                                    <a href="http://frontitreact-env.mmd2zpu8zr.us-east-1.elasticbeanstalk.com/" className="fas fa-tv fa-2x" Style="padding:20px"></a>
                                </div>*/}
                            <div className="card-body shadow">
                                <div style={{fontFamily: "cursive", fontSize: "22px"}} align={"center"}
                                     className="card-title">CV generator
                                </div>
                                <div className="d-flex justify-content-center" style={{marginTop: "20px"}}>
                                    <i className="fab fa-react fa-2x"></i> <i className="fab fa-java fa-2x"></i>
                                </div>
                                <div className="d-flex justify-content-around" style={{marginTop: "20px"}}>
                                    <a href="" className="fab fa-github fa-2x" Style="padding:20px"> </a>
                                    <a href="#" className="fas fa-file-word fa-2x" Style="padding:20px"></a>
                                    <a href="" className="fas fa-tv fa-2x" Style="padding:20px"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card shadow" Style="width: 95%; height:120%">
                            <img src={require('../images/hemlagat.png')} width="100%"  className="card-img-top " alt="..."/>

                            <div className="card-body shadow">
                                <div style={{fontFamily: "cursive", fontSize: "22px"}} align={"center"}
                                     className="card-title">Hem-lagat
                                </div>
                                <div className="d-flex justify-content-center" style={{marginTop: "20px"}}>
                                  Java Server Faces(JSF)
                                </div>
                                <div className="d-flex justify-content-around" style={{marginTop: "20px"}}>
                                    <a href="" className="fab fa-github fa-2x" Style="padding:20px"> </a>
                                    <a href="#" className="fas fa-file-word fa-2x" Style="padding:20px"></a>
                                    <a href="" className="fas fa-tv fa-2x" Style="padding:20px"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card" Style="width: 100%; height:120% ">
                            <img
                                src={require('../images/barry.jpg')}
                                Style="height:188px"
                                className="card-img-top" alt="..."/>
                            <div className="card-body shadow">
                                <div style={{fontFamily: "cursive", fontSize: "22px"}} align={"center"}
                                     className="card-title">KingStone kutz
                                </div>
                                <div className="d-flex justify-content-center" style={{marginTop: "20px"}}>
                                    NextJs/Prisma/Mysql/vercel/Stripe/Swish/
                                </div>
                                <div className="d-flex justify-content-around" style={{marginTop: "20px"}}>
                                    <a href="" className="fab fa-github fa-2x" Style="padding:20px"> </a>
                                    <a href="#" className="fas fa-file-word fa-2x" Style="padding:20px"></a>
                                    <a href="" className="fas fa-tv fa-2x" Style="padding:20px"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/**

                     **/}


                </div>

                {/*<div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="card" Style="width: 100%;">
                            <img
                                src={require("../images/ven.png")}
                                className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Venture for Gothenburg</h5>
                                <p className="card-text"> sidan under prod..</p>
                                <a href="https://github.com/nurrabd/aventureGBG" className="fab fa-github fa-2x" Style="padding:20px"> </a>
                                <a href="https://elastic-lewin-a15960.netlify.app/" className="fas fa-tv fa-2x" Style="padding:20px"></a>
                            </div>
                        </div>
                    </div>
                </div>*/}
                 <div Style="height: 200px"></div>

            </div>
            </div>

        );
    }
}

export default Portofolio;
