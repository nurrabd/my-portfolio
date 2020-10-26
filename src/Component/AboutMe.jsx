import React, {Component} from 'react';

class AboutMe extends Component {
    render() {
        return (
            <div Style="background-color: pink; ">
            <div className="container" id="about" >

                <div className="row  justify-content-center">

                    <div className="col-8" >
                        <div Style=" height:230px; "></div>
                        <h4 Style="color:white"> About Me</h4>
                        <p Style="color:white" >
                            I am a Student at Chalmers University, Sweden. I Started my studies in 2016 . Iam obtaining my BsC in Computer Science and i will
                            be done with my studies this summer 2019. My interests range from Software development to Hardware development.
                            Over the last years I have worked on a number of areas in these fields, there i was able tackle in several programing language as Java, C, JavaScript.
                            Most of my my earlier school projects and ongoing work will be available online as soon as possible,
                            however if you want to know more about another projects that i have not mentioned,
                            please send me an e-mail and I will do my best to respond as soon as possible.
                            Further info about my schoolwork can be found in the .
                        </p>
                        <div Style="height:300px;"></div>
                    </div>
                </div>


            </div>
            </div>
        );
    }
}

export default AboutMe;
