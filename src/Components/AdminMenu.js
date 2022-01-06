import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import Parse from 'parse/dist/parse.min.js';
import './style.css';
import "./Home.css"
import './Menu.css';
import AdminHome from './AdminHome';

const AdminMenu = () => {
    const [breakfastMenu, setBreakfastMenu] = useState([]);
    // const [bfast, setBfast] = useState('');


    const [lunchMenu, setLunchMenu] = useState([]);
    // const [lunch, setLunch] = useState('');

    const [snacksMenu, setSnacksMenu] = useState([]);


    const [dinnerMenu, setDinnerMenu] = useState([]);



    useEffect(() => {
        readMenus();
    }, []);

    const readMenus = async function () {
        // Reading parse objects is done by using Parse.Query
        const parseQuery = new Parse.Query('Menu');
        try {
            let menus = await parseQuery.find();
            // Be aware that empty or invalid queries return as an empty array
            // Set results to state variable

            menus = JSON.parse(JSON.stringify(menus));

            if (menus.length) {
                setBreakfastMenu(menus[0].breakfast);
                setLunchMenu(menus[0].lunch);
                setSnacksMenu(menus[0].snacks);
                setDinnerMenu(menus[0].dinner);

            } else {
                setBreakfastMenu([]);
                setLunchMenu([]);
                setSnacksMenu([]);
                setDinnerMenu([]);
            }

            return true;
        } catch (error) {
            // Error can be caused by lack of Internet connection
            alert(`Error! ${error.message}`);
            return false;
        };
    };

    return(
        <React.Fragment>
            <div>
            <AdminHome />

            <section className="main-card--cointainer ">

                    <>
                        <div className="card-container " >
                            <div className="card">
                                <div className="card-body">

                                    <span className="card-author subtle">Breakfast</span>
                                    {breakfastMenu.map((data) => <span className="d-flex flex-direction-column mb-2 justify-content-center menuItem">{data}</span>)}
                                   

                                </div>

                            </div>
                        </div>

                        <div className="card-container" >
                            <div className="card">
                                <div className="card-body">

                                    <span className="card-author subtle">Lunch</span>
                                    {lunchMenu.map((data) => <span className="d-flex flex-direction-column mb-2 justify-content-center menuItem">{data}</span>)}
                                    

                                </div>

                            </div>
                        </div>

                        <div className="card-container" >
                            <div className="card">
                                <div className="card-body">

                                    <span className="card-author subtle">Snacks</span>
                                    {snacksMenu.map((data) => <span className="d-flex flex-direction-column mb-2 justify-content-center menuItem">{data}</span>)}
                                    

                                </div>

                            </div>
                        </div>

                        <div className="card-container" >
                            <div className="card">
                                <div className="card-body">

                                    <span className="card-author subtle">Dinner</span>
                                    {dinnerMenu.map((data) => <span className="d-flex flex-direction-column mb-2 justify-content-center menuItem">{data}</span>)}
                                    

                                </div>

                            </div>
                        </div>

                        
                    </>

                </section>

            </div>
        </React.Fragment>
    );
}

export default AdminMenu;
