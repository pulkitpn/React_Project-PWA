import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import Parse from 'parse/dist/parse.min.js';

import './style.css';
import "./Menu.css";
import Navi from './Navi';
import './contact.css';




const Messmenu = () => {


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
            <Navi />

            <section className="main-card--cointainer ">

                    <div className="container-fluid shadow p-3 mb-5 bg-white rounded">
                        <div className="card-container shadow">
                            <div className="card">
                                <div className="card-body">

                                    <span className="card-author subtle">Breakfast</span>
                                    {breakfastMenu.map((data) => <span className="d-flex flex-direction-column mb-2 justify-content-center menuItem">{data}</span>)}
                                    {/* <center>
                                    Interested <input type="radio" className="mt-2 mr-5" name="breakfast" value="1"></input>
                                    Not Interested <input type="radio" className="mt-2" name="breakfast" value="0"></input>
                                    </center> */}

                                </div>

                            </div>
                        </div>

                        <div className="card-container shadow" >
                            <div className="card">
                                <div className="card-body">

                                    <span className="card-author subtle">Lunch</span>
                                    {lunchMenu.map((data) => <span className="d-flex flex-direction-column mb-2 justify-content-center menuItem">{data}</span>)}
                                    {/* <center>
                                    Interested <input type="radio" className="mt-2 mr-5" name="lunch" value="1"></input>
                                    Not Interested <input type="radio" className="mt-2" name="lunch" value="0"></input>
                                    </center> */}

                                </div>

                            </div>
                        </div>

                        <div className="card-container shadow" >
                            <div className="card">
                                <div className="card-body">

                                    <span className="card-author subtle">Snacks</span>
                                    {snacksMenu.map((data) => <span className="d-flex flex-direction-column mb-2 justify-content-center menuItem">{data}</span>)}
                                    {/* <center>
                                    Interested <input type="radio" className="mt-2 mr-5" name="snacks" value="1"></input>
                                    Not Interested <input type="radio" className="mt-2" name="snacks" value="0"></input>
                                    </center> */}

                                </div>

                            </div>
                        </div>

                        <div className="card-container shadow" >
                            <div className="card">
                                <div className="card-body">

                                    <span className="card-author subtle">Dinner</span>
                                    {dinnerMenu.map((data) => <span className="d-flex flex-direction-column mb-2 justify-content-center menuItem">{data}</span>)}
                                    {/* <center>
                                    Interested <input type="radio" className="mt-2 mr-5" name="dinner" value="1"></input>
                                    Not Interested <input type="radio" className="mt-2" name="dinner" value="0"></input>
                                    </center> */}

                                </div>

                            </div>
                        </div>

                        
                    </div>

                </section>

            </div>
        </React.Fragment>
    );
};
export default Messmenu;