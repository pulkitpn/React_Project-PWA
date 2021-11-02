import React from "react";
import { useHistory } from "react-router";
const Menu = () => {
    const history = useHistory();
    const openHome = () =>{
        history.goBack()
    }
    return(
        <React.Fragment>
            <div>
                <h1>Mess Menu</h1>
                <button onClick={openHome}>home</button>
            </div>
        </React.Fragment>
    );
};
export default Menu;