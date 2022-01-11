import logo from './logo.svg';
import { BrowserRouter, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import React from 'react';
import Parse from 'parse/dist/parse.min.js';
// import Navi from './Components/Navi';
import Home from './Components/Home';
import AddMenu from './Components/AddMenu';
import Messmenu from './Components/Menu';
import Landing from './Components/Landing';
import Glogin from './Components/Glogin';
import AdminLogin from './Components/AdminLogin';
import AdminHome from './Components/AdminHome';
import AdminMenu from './Components/AdminMenu';
import Ahome from './Components/Ahome';
import Contacts from './Components/Contacts';

const PARSE_APPLICATION_ID = 'EbdDjH0e4TPNN28DY6008j6EwfEiYGyzjBYKJnAu';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'BJ9NOXbcCkOc1C3O6popzEcLPDqezrB2YE2iJjFC';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route
            path='/glogin'
            component={Glogin}
            exact
          />


          <Route
            path='/admin'
            component={AdminLogin}
            exact
          />

          <Route
            path='/adminhome'
            component={AdminHome}
            exact
          />

          <Route
            path='/ahome'
            component={Ahome}
            exact
          />


          <Route
            path="/home"
            component={Landing}
            exact
          />


          <Route
            path="/menu"
            component={Messmenu}
            exact
          />

          <Route
            path="/contact"
            component={Contacts}
          />

          <Route
            path="/admin/addmenu"
            component={AddMenu}
            exact
          />

          <Route
            path="/admin/menu"
            component={AdminMenu}
            exact
          />

          <Redirect to="/glogin" />
        </Switch>
      </BrowserRouter >




    )

  }
}


export default App;
