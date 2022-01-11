import React from 'react';
import Navi from './Navi';
import './style.css';

const Contacts = () => {
    return (
        <React.Fragment>
            <Navi/>
            <section className="main-card--cointainer">
                <div className="card-container" >
                    <div className="card">
                        <div className="card-body">
                            <span className="card-author subtle ">Chief Warden</span>
                            <p>Dr. K.N. Subramanya</p>
                            <p><span className="fa fa-phone"></span> <a href="tel:+91 080-68188100 / 8111">+91 080-68188100 / 8111</a></p>
                            <p><span className="fa fa-envelope"></span> <a href="mailto:principal@rvce.edu.in">principal@rvce.edu.in</a></p>

                        </div>
                    </div>
                </div>

                <div className="card-container" >
                    <div className="card">
                        <div className="card-body">
                            <span className="card-author subtle ">Warden</span>
                            <p>Prof. P. Nagaraju</p>
                            <p><span className="fa fa-phone"></span> <a href="tel:+91 9916911720">+91 9916911720</a></p>

                        </div>
                    </div>
                </div>

               
                <div className="card-container" >
                    <div className="card">
                        <div className="card-body">
                            <span className="card-author subtle ">Warden RVCE Girls Hostel</span>
                            <p>Dr. Padmaja K.V</p>
                            <p><span className="fa fa-envelope"></span> <a href="mailto:padmajakv@rvce.edu.in">padmajakv@rvce.edu.in</a></p>


                        </div>
                    </div>
                </div>

                <div className="card-container" >
                    <div className="card">
                        <div className="card-body">
                            <span className="card-author subtle ">RVCE Hostels</span>
                            <p>Hostel Office</p>
                            <p><span className="fa fa-phone"></span> <a href="tel:+91 080-67178424 / 67178148">+91 080-67178424 / 67178148</a></p>
                            <p><span className="fa fa-envelope"></span> <a href="mailto:rvce.bh@rvce.edu.in">rvce.bh@rvce.edu.in</a></p>
                            

                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}
export default Contacts;