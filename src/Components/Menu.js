import React from "react";
import { useHistory } from "react-router";

import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import Navi from './Navi';



const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];
const Messmenu = () => {
    const history = useHistory();
    const openHome = () => {
        history.goBack()
    }

    const [menuData, setMenuData] = React.useState(Menu)
    const [menuList, setMenuList] = React.useState(uniqueList)

    const filterItem = (category) => {

        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };

    return (
        <React.Fragment>
            <div>
            <Navi />
            <br /><br /><br /><br />
                {/* <Navbar filterItem={filterItem} menuList={menuList} /><br/><br/> */}
                <MenuCard menuData={menuData} />
                {/* <button onClick={openHome}>home</button> */}
            </div>
        </React.Fragment>
    );
};
export default Messmenu;