import React from 'react';
import { useHistory } from "react-router";
import './style.css';
import AdminHome from './AdminHome';


const AddMenu = ({ menuData }) => {
    return (
        <>
            <div className="">
                <AdminHome/>
                <br /><br /><br /><br />
                {/* <section className="main-card--cointainer">
                    {menuData.map((curElem) => {
                        const { id, item1, item2, item3, item4, item5, item6, item7, item8, category } = curElem;
                        return (
                            <>
                                <div className="card-container" key={id}>
                                    <div className="card">
                                        <div className="card-body">

                                            <span className="card-author subtle">{category}</span>
                                            <h2 className="card-title">{item1}</h2>
                                            <h2 className="card-title">{item2}</h2>
                                            <h2 className="card-title">{item3}</h2>
                                            <h2 className="card-title">{item4}</h2>
                                            <h2 className="card-title">{item5}</h2>
                                            <h2 className="card-title">{item6}</h2>
                                            <h2 className="card-title">{item7}</h2>
                                            <h2 className="card-title">{item8}</h2>

                                        </div>

                                    </div>
                                </div>
                            </>
                        );
                    })}
                </section> */}
            </div>
        </>
    );
}

export default AddMenu;