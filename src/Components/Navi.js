import React from 'react';
import { Link } from 'react-router-dom';
import './Navi.css';
import rvlogo from './logo_0_0.png';

function Navi() {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <nav className="navbar navbar-default navbar-expand-md bg-dark navbar-dark fixed-top">
                    <a className="navbar-brand" href="#" style={{ color: "red" }}><img src={rvlogo} style={{ height: 35 }} /> RVezy | </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="true" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Notice/Circulars</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Calender</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/menu">Mess Menu</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        {/* <ul className="navbar-nav">
                            <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">HTML</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">CSS</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">BS</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">XML</a></li>
                        </ul> */}
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link" href="#"><span className="fas fa-user"></span> Sign Up</a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><span className="fas fa-sign-in-alt"></span>Login</a>
                            </li>
                            {/* <li className="nav-item"><a className="nav-link" href="#"><span style={{ fontSize: 25 }} className="fas fa-bars"
                                onclick="openNav()"></span></a></li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Navi;