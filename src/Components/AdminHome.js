import React from 'react';
import rvlogo from './logo_0_0.png';
import { Link, useHistory } from 'react-router-dom';


const AdminHome = () => {
    const history = useHistory();
    const openHome = () => {
        history.push('/ahome')
    }
    const Logout = () => {
        history.replace('./glogin');
        window.history.replaceState(null, null, "/glogin");
    }



    return (
        <React.Fragment>
            <div className="container-fluid">
                <nav className="navbar navbar-default navbar-expand-md bg-dark navbar-dark fixed-top">
                    <a className="navbar-brand" onClick={openHome} style={{ color: "red" }}><img src={rvlogo} style={{ height: 35 }} alt='RV Logo' /> RVezy | </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="true" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/menu">Mess Menu</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/addmenu">Add Menu</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link" href="#" ><span className="fas fa-user"></span> Admin</a></li>
                            <li className="nav-item"><a className="nav-link" onClick={Logout} ><span className="fas fa-sign-out-alt"></span>Logout</a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>

            

        </React.Fragment>
    )
}
export default AdminHome;