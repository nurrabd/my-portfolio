import React, { Fragment } from 'react';


import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';




const Home = () => {
    document.body.classList.add( 'home' );
    document.body.classList.add( 'header-absolute-true' );

    return (
        <Fragment>

            <Loading />

            <Header logoColor="light" />

            <main id="main" className="site-main content-no-spacing">
                <div className="content">
                    <div className="clearfix">


                        <div id="img" className="block spacer p-top-xl">
                            <div className="img-no-wrap-1 img-gray">
                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src="assets/img/placeholder/1920x700.jpg" alt="Beauty Salon" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Home;
