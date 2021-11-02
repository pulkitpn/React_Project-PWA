import logo from './logo.svg';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navi from './Components/Navi';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Landing from './Components/Landing';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/home" 
            component={Landing}
          />

          <Route
            path="/menu"
            component={Menu}
          />

          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
      
        
      

    )
  }
}


export default App;
