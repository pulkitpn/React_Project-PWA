import React from 'react';
import "./AdminLogin.css";
import {  withRouter } from 'react-router-dom';


class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

    }


    handle = (event, id) => {

        let data = event.target.value;
        this.setState(() => ({
            [`${id}`]: data
        }))
    }

    validate = () => {
        const { history } = this.props;

        if (this.state.username == "ADMIN" && this.state.password == "ADMIN") {
            history.replace('./ahome');
            window.history.pushState(null,null,"/ahome");
            history.push('./ahome');


        } else {
            console.log('Errors')

        }

    }


    render() {
        const { history } = this.props;
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <form >
                        <div className="admin">
                            <h1>Admin Login</h1><br /><br />
                            <input type="text" placeholder="Enter Username" value={this.state.username} onChange={(event) => this.handle(event, "username")} required="true" /><br />
                            <input type="password" placeholder="Enter Password" value={this.state.password} onChange={(event) => this.handle(event, "password")} required="true" /><br /><br />
                            <input type="submit" value="Login" class="button" onClick={this.validate()} />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default withRouter(AdminLogin);