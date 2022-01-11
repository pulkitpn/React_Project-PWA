import React, { useState, useEffect}  from 'react';
import Parse from 'parse/dist/parse.min.js';
// import GoogleLogin from 'react-google-login';
// import {Glogin, doUserLogOut} from './Glogin';
import { Link,useHistory } from 'react-router-dom';
// import AddMenu from './AddMenu';
import './Navi.css';
import rvlogo from './logo_0_0.png';



const Navi = ()=> {
    const history = useHistory();
    const openHome = () => {
        history.push("/home")
    }
    
    

    const [currentUser, setCurrentUser] = useState(null);

    const doUserLogOut = async function () {
        try {
          await Parse.User.logOut();
          // To verify that current user is now empty, currentAsync can be used
          const currentUser = await Parse.User.current();
          if (currentUser === null) {
            alert('Success! No user is logged in anymore!');
            history.replace('./glogin');
            window.history.replaceState(null,null,"/glogin");
            
          }
          // Update state variable holding current user
          getCurrentUser();
          return true;
        } catch (error) {
          alert(`Error! ${error.message}`);
          return false;
        }
        
      };

      const getCurrentUser = async function () {
        const currentUser = await Parse.User.current();
        // Update state variable holding current user
        setCurrentUser(currentUser);
        return currentUser;
      };
            
    return (
        <React.Fragment>
            <div className="container-fluid">
                <nav className="navbar navbar-default navbar-expand-md bg-dark navbar-dark fixed-top">
                <a className="navbar-brand" onClick={openHome} style={{ color: "red" }}><img src={rvlogo} style={{ height: 35 }} alt='RV Logo'/> RVezy | </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="true" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Notice/Circulars</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Calender</a>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/menu" refresh="true">Mess Menu</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/addmenu">Add Menu</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contacts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
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
                            <li className="nav-item"><a className="nav-link" href="#" ><span className="fas fa-user"></span> {window.localStorage.getItem("username")}</a></li>
                            <li className="nav-item"><a className="nav-link" onClick={doUserLogOut} ><span className="fas fa-sign-out-alt"></span>Logout</a>
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