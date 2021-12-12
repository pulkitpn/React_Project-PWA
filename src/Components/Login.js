import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import app from '../firebaseConfig';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDocs, collection } from "firebase/firestore"; 
import { getFirestore } from 'firebase/firestore';

import "./Login.css";

const db = getFirestore(app);

const Login = () => {

    const history = useHistory();
    
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        
        const auth = getAuth();
        signInWithPopup(auth, provider).then(async (response) => {
            // Fetching users from DB
            const docRef = collection(db, "Users");
            const docSnap = await getDocs(docRef);
            const usersData = docSnap.docs.map(user => user.data());
            console.log(response);
            // Getting the data from response of signInWithPopup
            const loggedInUsername = response.user.displayName;
            const accessToken = response.user.accessToken;
            // console.log(usersData)
            // Checking whether the user exists in the database

            const foundUser = usersData.find(u => u.name.trim() === loggedInUsername.trim());
            console.log(foundUser);

            if (foundUser) {
                window.localStorage.setItem('accessToken', accessToken);
                return history.replace('/home');
            } else {
                return history.push('/register', { name: loggedInUsername, access_token: accessToken });
            }
              
              
        }).catch(err => { console.log(err) });
    }
    return (
        <React.Fragment>
            <form action="/login" method="post">
                <div className="loginform">
                    <h1>Login</h1><br /><br />
                    {/* <input type="text" placeholder="Enter Username" name="username" id="username" /><br />
                    <input type="password" placeholder="Enter Password" name="password" id="password" /><br /><br /> */}
                    {/* <input type="checkbox"/>  Keep me logged in<br/><br/> */}
                    {/* <input type="button" value="Login" className="button" /><br />
                    <Link to="/register">Not registered, please Register</Link>
                    <div>or</div> */}
                    <div className="container-fluid">
                    <input id="loginbtn" value="Sign in with Google" onClick={googleLogin} className="button" /><br />
                    </div>
                    
                    {/* <Link to="/register">Not registered, please Register</Link> */}
                </div>
            </form>
        </React.Fragment>
    )
}
export default Login;