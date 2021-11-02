import { Link , useHistory} from 'react-router-dom';
import React from 'react';
import './Home.css';
import Menu from './Menu';

const Home = () => {
    const history=useHistory();
    const openmenu = () => {
        history.push("/menu")

    }
    
    return (
        <>
            <div className="main-card--container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card-container" key='1' onClick={openmenu}>
                            <div className="card card-tag">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">1</span>
                                    <span className="card-author subtle">Mess Menu</span>
                                    <h2 className="card-title">Mess Menu</h2>
                                    <span className="card-description subtle">
                                        Get your all the important notifications here.
                                    </span>
                                    <div className="card-read">View</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card-container" key='2'>
                            <div className="card card-tag">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">2</span>
                                    <span className="card-author subtle">Events</span>
                                    <h2 className="card-title">Events</h2>
                                    <span className="card-description subtle">
                                        Get your all the important notifications here.
                                    </span>
                                    <div className="card-read">View</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="card-container" key='3'>
                            <div className="card card-tag">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">3</span>
                                    <span className="card-author subtle">Notifications/Circulars</span>
                                    <h2 className="card-title">Notifications/Circulars</h2>
                                    <span className="card-description subtle">
                                        Get your all the important notifications here.
                                    </span>
                                    <div className="card-read">View</div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card-container" key='4'>
                            <div className="card card-tag">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">4</span>
                                    <span className="card-author subtle">Calender</span>
                                    <h2 className="card-title">Calender</h2>
                                    <span className="card-description subtle">
                                        Get your all the important notifications here.
                                    </span>
                                    <div className="card-read">View</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="card-container" key='5'>
                            <div className="card card-tag">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">5</span>
                                    <span className="card-author subtle">Contacts</span>
                                    <h2 className="card-title">Contacts</h2>
                                    <span className="card-description subtle">
                                        Get your all the important notifications here.
                                    </span>
                                    <div className="card-read">View</div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card-container" key='6'>
                            <div className="card card-tag">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">6</span>
                                    <span className="card-author subtle">About</span>
                                    <h2 className="card-title">About</h2>
                                    <span className="card-description subtle">
                                        Get your all the important notifications here.
                                    </span>
                                    <div className="card-read">View</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;