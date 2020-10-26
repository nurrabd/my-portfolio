import React, {Component} from 'react';
import Split from 'react-split'

class LandingPage extends Component {
    constructor(props){
        super();
    this.state = {
            web : 0 ,
            count: 1
        }
    }

    componentDidMount() {

        const h =()=>{
            this.myinteva =  this.setState({
                web: this.state.web +  1,
                count:  this.state.count + 1

            });
        };



       setInterval(h, 1000);



    }

    componentWillMount() {
        clearInterval(this.myinteva)
    }

    render() {
        return (
<div className="back">
    {/** <img src="https://www.w3schools.com/css/paris.jpg"
     width="100%"
     height="700px"
     alt=""
     />**/}

    <div Style="height:50px;" ></div>
            <div className="container" >
                <p/>

                <div className="row" >
                    <div className="col-md-6 col-sm-12  border-danger" Style="height:80%; width:100%">
                        <img
                            src={require('../images/pic1.JPG')}
                        alt="d"
                        className="img-responsive"
                            height="70%"
                            width="70%"
                            Style="border-radius:50%"
                       />
                    </div>
                    <div className="col-md-6 col-sm-12    border-danger" Style="height:; width:100%" align="center">
                        <div Style="height:90px"></div>
                        <h3 Style="font-family:Bevan ; font-size:50px">Software developer </h3>
                        <h3 Style="font-family: Bevan; font-size:30px">Nurhusein Abdulkader </h3>
                        <h6 Style="font-family: Bevan; font-size:20px">nurhusein11@gmail.com </h6>
                        <h6 Style="font-family: Bevan; font-size:20px">0722524885 </h6>

                    </div>
                </div>

                <div Style="height:60px"></div>
                <div className="row">
                    <div className="col-6  border-danger " Style="height:100px; width:100% " align="right">
                        <a className="fab fa-linkedin fa-5x btn-outline-primary" href="https://www.linkedin.com/in/nurhusein-abdulkader-185865112/"
                           Style="color:black"></a>
                    </div>
                    <div className="col-6    border-danger "  Style="height:100px; width:100%" align="left">
                        <a className="fab fa-github fa-5x btn-outline-info" href="https://github.com/nurrabd"
                           Style="color:black"></a>
                    </div>
                </div>
                <div Style="height:45px"></div>
                <div className="row justify-content-center">
                    <div className="col-md-8  ">

                    <i className="   border-danger fab fa-java fa-5x " Style=" padding:20px; color:pink"></i>
                    <i className="   border-danger fab fa-js fa-5x" Style=" padding:20px;color:pink"></i>
                    <i className="   border-danger fab fa-react fa-5x" Style=" padding:20px;color:pink"></i>
                    <i className="   border-danger fab fa-aws fa-5x" Style=" padding:20px;color:pink"></i>
                    <i className="   border-danger fab fa-html5 fa-5x" Style="padding:20px; color:pink"></i>
                    <i className="   border-danger fab fa-css3-alt fa-5x" Style="padding:20px; color:pink"></i>
                        {/** <i  ><img src="https://firststepitsolution.com/wp-content/uploads/2020/04/spring-boot-icon.png" height={"10%"} width={"20%"} alt="spring-boot"  Style="padding:20px; color:pink" className=" "/></i>**/}


                    </div>
                </div>
            </div>
</div>

        );
    }
}

export default LandingPage;
