import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import "./Login.css";
import app from '../firebaseConfig';
import { doc, addDoc, getDocs, collection } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';

const db = getFirestore(app)

const Register = () => {
    const location = useLocation();
    const history = useHistory();

    const [accountType, setAccountType] = useState('');

    const handleAccountSelection = (event) => {
        setAccountType(event.target.value)
    }

    const handleRegisterUser = async () => {
        if (!location.state.name || accountType === "null") {
            return;
        }
        console.log(accountType)
        await addDoc(collection(db, "Users"), {
            name: location.state.name,
            accountType: accountType
        });

        window.localStorage.setItem('accessToken', location.state.access_token);
        history.replace('/home');

    }

    return (
        <React.Fragment>
            <form action="/login" method="post">
                <div className="loginform">
                    <h1>Register</h1><br /><br />
                    <select value={accountType} onChange={handleAccountSelection}>
                        <option name="null" value="null">Select account type</option>
                        <option name="student" value="student">Student</option>
                        <option name="teacher" value="teacher">Teacher</option>
                    </select>
                    <br /><br />
                    <input onClick={handleRegisterUser} value="Register" className="button" />
                </div>
            </form>
        </React.Fragment>
    )
}
export default Register;