import React from 'react';
import Navi from './Navi';
import anim from './rvanim.gif';
import './contact.css';


const About = () => {
    return (
        <React.Fragment>
            <Navi />
            <div className="container-fluid">
                <center><img src={anim} style={{ height: 400 }} /><br/><br/>
                    <span>Feel free to send us your feedback at:</span>
                    <p><span className="fa fa-envelope"></span>  <a href="mailto:pulkitn.mca20@rvce.edu.in">pulkitn.mca20@rvce.edu.in</a></p>
                    <p>or</p>
                    <p><span className="fa fa-envelope"></span>  <a href="mailto:anshulg.mca20@rvce.edu.in">anshulg.mca20@rvce.edu.in</a></p>
                    <br/><br/><br/><br/>
                    <span className="developed">DEVELOPED by PULKIT NAGAR and ANSHUL GOYAL</span>

                </center>
            </div>
        </React.Fragment>
    )
}
export default About;