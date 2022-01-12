import React from 'react';
import { useHistory } from 'react-router-dom';
import AdminHome from './AdminHome';
// import './Home.css';

const Ahome = () => {

    const history = useHistory();
    const openmenu = () => {
        history.push("/admin/menu")
    }
    const addmenu = () =>{
        history.push("/admin/addmenu")
    }

    return (
        <React.Fragment>
            <AdminHome />
            <br /><br /><br /><br />
            <div className="main-card--container container shadow p-3 bg-white rounded">
                <div >
                    <div className="card-container mt-5" key='1' onClick={openmenu}>
                        <div className="card card-tag">
                            <div className="card-body">
                                <span className="card-number card-circle subtle">1</span>
                                {/* <span className="card-author subtle">Mess Menu</span> */}
                                <h2 className="card-title">Mess Menu</h2>
                                {/* <span className="card-description subtle">
                                        Get your all the important notifications here.
                                    </span> */}
                                <div className="card-read">View</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div >
                    <div className="card-container" key='2' onClick={addmenu}>
                        <div className="card card-tag">
                            <div className="card-body">
                                <span className="card-number card-circle subtle">2</span>
                                {/* <span className="card-author subtle">Contacts</span> */}
                                <h2 className="card-title">Add Menu</h2>
                                {/* <span className="card-description subtle">
                                        Get your all the important notifications here.
                                    </span> */}
                                <div className="card-read">View</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div >
                    <div className="card-container" key='3'>
                        <div className="card card-tag">
                            <div className="card-body">
                                <span className="card-number card-circle subtle">3</span>
                                {/* <span className="card-author subtle">Contacts</span> */}
                                <h2 className="card-title">Contacts</h2>
                                {/* <span className="card-description subtle">
                                        Get your all the important notifications here.
                                    </span> */}
                                <div className="card-read">View</div>
                            </div>

                        </div>
                    </div>
                </div>

                <div >
                    <div className="card-container" key='3'>
                        <div className="card card-tag">
                            <div className="card-body">
                                <span className="card-number card-circle subtle">3</span>
                                <h2 className="card-title">About</h2>
                                {/* <span className="card-description subtle">
                                        Get your all the important notifications here.
                                    </span> */}
                                <div className="card-read">View</div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <br /><br /><br />

        </React.Fragment>
    )
}
export default Ahome;