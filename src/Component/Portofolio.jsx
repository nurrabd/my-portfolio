import React, {Component} from 'react';

class Portofolio extends Component {
    render() {
        return (
            <div className="container" id="project">
                <div Style="height:50px"></div>
                <h2 align="center"> Projects</h2>
                <div Style="height:50px"></div>
                <div className="row">
                    <div className="col-md-4 col-sm-6" >
                        <div className="card" Style="width: 100%; ">
                            <img src="https://s3-eu-west-1.amazonaws.com/tt-screenshots/74d16d69-88e4-4718-83cf-d33b885cd642-facebook.png?update=1565166811" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Resume generator</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                    <a href="#" className="fab fa-github fa-2x" Style="padding:20px"> </a>
                                    <a href="#" className="fas fa-file-word fa-2x" Style="padding:20px"></a>
                                    <a href="#" className="fas fa-tv fa-2x" Style="padding:20px"></a>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card" Style="width: 100%;">
                            <img src="https://s3-eu-west-1.amazonaws.com/tt-screenshots/74d16d69-88e4-4718-83cf-d33b885cd642-facebook.png?update=1565166811" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                    <a href="#" className="fab fa-github fa-2x" Style="padding:20px"> </a>
                                    <a href="#" className="fas fa-file-word fa-2x" Style="padding:20px"></a>
                                    <a href="#" className="fas fa-tv fa-2x" Style="padding:20px"></a>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="card" Style="width: 100%;">
                            <img src="https://s3-eu-west-1.amazonaws.com/tt-screenshots/74d16d69-88e4-4718-83cf-d33b885cd642-facebook.png?update=1565166811" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                    <a href="#" className="fab fa-github fa-2x" Style="padding:20px"> </a>
                                    <a href="#" className="fas fa-file-word fa-2x" Style="padding:20px"></a>
                                    <a href="#" className="fas fa-tv fa-2x" Style="padding:20px"></a>
                                </div>
                        </div>
                    </div>


                </div>

            </div>

        );
    }
}

export default Portofolio;
