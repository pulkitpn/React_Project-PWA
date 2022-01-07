import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';
import GoogleLogin from 'react-google-login';
import { useHistory, useLocation } from 'react-router-dom';

import './Glogin.css';
import { Button, Divider } from 'antd';
import logo from './RVezy1.png';

export const Glogin = () => {
  const location = useLocation();
  const history = useHistory();
    const admin = () => {
        history.push("/admin")
    }
  const [currentUser, setCurrentUser] = useState(null);
  const doUserLogOut = async function () {
    try {
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        alert('Success! No user is logged in anymore!');
      }
      // Update state variable holding current user
      getCurrentUser();
      return true;
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  // Function that will return current user and also update current username
  const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    // Update state variable holding current user
    setCurrentUser(currentUser);
    return currentUser;
  };

  const handleGoogleLoginLoginResponse = async function (response) {
    // Check if response has an error
    if (response.error !== undefined) {
      console.log(`Error: ${response.error}`);
      return false;
    } else {
      // window.localStorage.setItem('tokenId', location.state.tokenId);
      history.replace('./home');
      try {
        // Gather Google user info
        const userGoogleId = response.googleId;
        const userTokenId = response.tokenId;
        const userEmail = response.profileObj.email;
        // Try to login on Parse using linkWith and these credentials
        // Create a new Parse.User object
        const userToLogin = new Parse.User();
        // Set username and email to match google email
        userToLogin.set('username', userEmail);
        userToLogin.set('email', userEmail);
        
        try {
          let loggedInUser = await userToLogin.linkWith('google', {
            authData: { id: userGoogleId, id_token: userTokenId },
          });
          // logIn returns the corresponding ParseUser object
          // alert(
          //   `Success! User ${loggedInUser.get(
          //     'username'
          //   )} has successfully signed in!`
          // );
          // Update state variable holding current user
          getCurrentUser();
          
          return true;
        } catch (error) {
          // Error can be caused by wrong parameters or lack of Internet connection
          alert(`Error! ${error.message}`);
          return false;
        }
      } catch (error) {
        console.log('Error gathering Google user info, please try again!');
        return false;
      }
    }
  

  };
  

  return (
    <div>
      {currentUser === null && (
        <div className="container-fluid">
          <h2 className="heading">User Login</h2>
          <Divider />

          <center><img src={logo} style={{height: 300}} alt='rvlogo'/></center>

          <div className="login-social">

            <GoogleLogin
              clientId="923753418469-nhh05niegmae71vp0kjjlvuca98hgevm.apps.googleusercontent.com"
              render={renderProps => (
                <div onClick={renderProps.onClick} className="login-social-item" >
                  
                  <img className="login-social-item__image" src="https://bloomfield.edu/sites/default/files/2020-01/google_logo.png " alt="" />
                  {/* <span className="gtext">SignUp with Google</span> */}
                </div>
              )}
              buttonText="Login"
              onSuccess={handleGoogleLoginLoginResponse}
              onFailure={handleGoogleLoginLoginResponse}
              cookiePolicy={'single_host_origin'}
            />


          </div>
          <p className="form__hint">Not a student?  <a className="form__link" onClick={admin}>Sign in as admin</a></p>
        </div>
      )}

    </div>
  );
};
export default Glogin;