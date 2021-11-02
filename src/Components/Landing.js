import React from "react";
import Navi from "./Navi";
import Home from "./Home";

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
