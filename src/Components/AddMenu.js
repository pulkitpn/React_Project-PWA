import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import Parse from 'parse/dist/parse.min.js';
import './style.css';
import AdminHome from './AdminHome';
import './Menu.css';

const AddMenu = () => {
    const [menuId, setMenuId] = useState('');

    const [breakfastMenu, setBreakfastMenu] = useState([]);
    const [bfast, setBfast] = useState('');

    const [lunchMenu, setLunchMenu] = useState([]);
    const [lunch, setLunch] = useState('');

    const [snacksMenu, setSnacksMenu] = useState([]);
    const [snacks, setSnacks] = useState('');

    const [dinnerMenu, setDinnerMenu] = useState([]);
    const [dinner, setDinner] = useState('');

    const [isEdit, setIsEdit] = useState(false);

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
                setMenuId(menus[0].objectId);

                if (menus.length > 0) {
                    setIsEdit(true);
                } else {
                    setIsEdit(false);
                }
            } else {
                setBreakfastMenu([]);
                setLunchMenu([]);
                setSnacksMenu([]);
                setDinnerMenu([]);
                setMenuId('');
                setIsEdit(false);
            }

            return true;
        } catch (error) {
            // Error can be caused by lack of Internet connection
            alert(`Error! ${error.message}`);
            return false;
        };
    };


    //brakefast
    const handleBfastChange = (event) => {
        setBfast(event.target.value);
    }

    const addBMenu = () => {
        const updatedMenu = [...breakfastMenu]; // [idli]

        updatedMenu.push(bfast); // idli, dosa
        // ['idli','dosa']

        setBreakfastMenu(updatedMenu); // ['idli','dosa']
        setBfast('');
    }


    //lunch
    const handleLunchChange = (event) => {
        setLunch(event.target.value);
    }

    const addLunch = () => {
        const updatedMenu = [...lunchMenu]; // [idli]

        updatedMenu.push(lunch); // idli, dosa
        // ['idli','dosa']

        setLunchMenu(updatedMenu); // ['idli','dosa']
        setLunch('');
    }


    //snacks
    const handleSnacksChange = (event) => {
        setSnacks(event.target.value);
    }

    const addSnacks = () => {
        const updatedMenu = [...snacksMenu]; // [idli]

        updatedMenu.push(snacks); // idli, dosa
        // ['idli','dosa']

        setSnacksMenu(updatedMenu); // ['idli','dosa']
        setSnacks('');
    }


    // dinner
    const handleDinnerChange = (event) => {
        setDinner(event.target.value);
    }

    const addDinner = () => {
        const updatedMenu = [...dinnerMenu]; // [idli]

        updatedMenu.push(dinner); // idli, dosa
        // ['idli','dosa']

        setDinnerMenu(updatedMenu); // ['idli','dosa']
        setDinner('');
    }



    const saveMenu = async () => {
        if (isEdit) {
            // Update Menu
            // Create a new Todo parse object instance and set menu id
            let Menu = new Parse.Object('Menu');
            Menu.set('objectId', menuId);
            // Set new done value and save Parse Object changes
            Menu.set('breakfast', breakfastMenu);
            Menu.set('lunch', lunchMenu);
            Menu.set('snacks', snacksMenu);
            Menu.set('dinner', dinnerMenu);
            try {
                await Menu.save();
                // Success
                alert('Success! Menu updated!');
                // Refresh Menu list
                readMenus();
                return true;
            } catch (error) {
                // Error can be caused by lack of Internet connection
                alert(`Error! ${error.message}`);
                return false;
            };
        } else {
            // Creates a new Menu parse object instance
            let Menu = new Parse.Object('Menu');
            Menu.set('breakfast', breakfastMenu);
            Menu.set('lunch', lunchMenu);
            Menu.set('snacks', snacksMenu);
            Menu.set('dinner', dinnerMenu);
            // After setting the Menu values, save it on the server
            try {
                await Menu.save();
                // Success
                alert('Success! Menu created!');

                setIsEdit(true);
                return true;
            } catch (error) {
                // Error can be caused by lack of Internet connection
                console.log(`Error! ${error.message}`);
                return false;
            };
        }

    };

    const deleteMenu = async function () {
        // Create a new Todo parse object instance and set menu id
        let Menu = new Parse.Object('Menu');
        Menu.set('objectId', menuId);
        // .destroy should be called to delete a parse object
        try {
            await Menu.destroy();
            alert('Success! Menu deleted!');
            // Refresh Menu list to remove this one
            readMenus();
            return true;
        } catch (error) {
            // Error can be caused by lack of Internet connection
            alert(`Error! ${error.message}`);
            return false;
        }
    };

    return (
        <>
            <div className="">
                <AdminHome />
                <section className="main-card--cointainer">

                    <>

                    {/* brakefast */}
                        <div className="card-container" >
                            <div className="card">
                                <div className="card-body">

                                    <span className="card-author subtle ">Breakfast</span>
                                    {breakfastMenu.map((data) => <span className="d-flex flex-direction-column mb-2 justify-content-center mt-2 menuItem">{data}</span>)}
                                    <input type="text" className="bfast w-100 mt-4 shadow" placeholder="enter breakfast" value={bfast} onChange={handleBfastChange} />
                                    <center><button className="btn btn-primary rounded mt-2" onClick={addBMenu}>Add</button></center>

                                </div>

                            </div>
                        </div>
                        

                        {/* lunch */}
                        <div className="card-container" >
                            <div className="card">
                                <div className="card-body">

                                    <span className="card-author subtle ">Lunch</span>
                                    {lunchMenu.map((data) => <span className="d-flex flex-direction-column mb-2 justify-content-center mt-2 menuItem">{data}</span>)}
                                    <input type="text" className="bfast w-100 mt-4 shadow" placeholder="enter lunch" value={lunch} onChange={handleLunchChange} />
                                    <center><button className="btn btn-primary rounded mt-2" onClick={addLunch}>Add</button></center>

                                </div>

                            </div>
                        </div>


                        {/* snacks */}
                        <div className="card-container" >
                            <div className="card">
                                <div className="card-body">

                                    <span className="card-author subtle ">Snacks</span>
                                    {snacksMenu.map((data) => <span className="d-flex flex-direction-column mb-2 justify-content-center mt-2 menuItem">{data}</span>)}
                                    <input type="text" className="bfast w-100 mt-4 shadow" placeholder="enter lunch" value={snacks} onChange={handleSnacksChange} />
                                    <center><button className="btn btn-primary rounded mt-2" onClick={addSnacks}>Add</button></center>

                                </div>

                            </div>
                        </div>

                        {/* dinner */}

                        <div className="card-container" >
                            <div className="card">
                                <div className="card-body">

                                    <span className="card-author subtle ">Dinner</span>
                                    {dinnerMenu.map((data) => <span className="d-flex flex-direction-column mb-2 justify-content-center mt-2 menuItem">{data}</span>)}
                                    <input type="text" className="bfast w-100 mt-4 shadow" placeholder="enter lunch" value={dinner} onChange={handleDinnerChange} />
                                    <center><button className="btn btn-primary rounded mt-2" onClick={addDinner}>Add</button></center>

                                </div>

                            </div>
                        </div>
                    </>

                </section>
                <center>
                    <button className="btn btn-success rounded shadow" onClick={saveMenu}>{isEdit ? 'Edit Menu' : 'Add Menu'}</button>
                </center>
                <center>
                    <button className="btn btn-danger rounded mt-2 shadow" onClick={deleteMenu} disabled={!isEdit}>Delete</button>
                </center>
            </div>
        </>
    );
}

export default AddMenu;