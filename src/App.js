import logo from './logo.svg';
import { BrowserRouter, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import React, { useEffect } from 'react';
// import Navi from './Components/Navi';
import Home from './Components/Home';
import AddMenu from './Components/AddMenu';
import Messmenu from './Components/Menu';
import Landing from './Components/Landing';
import Register from './Components/Register';
import Login from './Components/Login';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const App = () => {

  const history = useHistory();

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        return;
      } else {
        return history.replace('/login');
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          component={Login}
        />
        <Route
          path="/register"
          component={Register}
        />
        <Route
          path="/home"
          component={Landing}
        />

        <Route
          path="/menu"
          component={Messmenu}
        />

        <Route
          path="/addmenu"
          component={AddMenu}
        />

        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>




  )

}


export default App;
