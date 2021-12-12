import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import AddMenu from './AddMenu';
import './Navi.css';
import rvlogo from './logo_0_0.png';

const Navi = ()=> {
    const history = useHistory();
    const openHome = () => {
        history.push("/home")
    }
    return (
        <React.Fragment>
            <div className="container-fluid">
                <nav className="navbar navbar-default navbar-expand-md bg-dark navbar-dark fixed-top">
                <a className="navbar-brand" onClick={openHome} style={{ color: "red" }}><img src={rvlogo} style={{ height: 35 }} /> RVezy | </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="true" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li> */}
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
                                <Link className="nav-link" to="/addmenu">Add Menu</Link>
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
                            <li className="nav-item"><a className="nav-link" href="#" ><span className="fas fa-user"></span> Sign Up</a></li>
                            <li className="nav-item"><a className="nav-link" href="#" data-toggle="modal" data-target="#login"><span className="fas fa-sign-in-alt"></span>Login</a>
                            </li>
                            {/* <li className="nav-item"><a className="nav-link" href="#"><span style={{ fontSize: 25 }} className="fas fa-bars"
                                onclick="openNav()"></span></a></li> */}
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Modal code................... */}

            <div className="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg module-border-wrap rounded" role="document">
                    <div className="modal-content module" id="modal">
                        <div className="modal-header"><h1>Login</h1></div>
                        <div className="email"><input type="email" placeholder="Institute Mail ID"/></div>
                        
                        <div className="pwd"><input type="password" placeholder="Password"/></div>
                        <div className="remember"><input type="checkbox"/><label className="form-check-label" for="example">&nbsp; Remember me</label></div>
                        <p className="register">Please Register, if not registered.</p>
                        <button type="button" className="btn btn-danger">Login</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navi;