import React from "react";
import Navi from "./Navi";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function Landing(){
    return(
        <React.Fragment>
          <Navi />
          <br /><br /><br /><br />
          <Home />
        </React.Fragment>
    )
}
export default Landing;
