import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Button } from '@material-ui/core';
import { logout } from '../firebase/auth';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    logoutButton() {
        return (
            <Button onClick={logout}>Logout</Button>
        );
    }

    render() {
        return (
            <AppBar position="relative">
                <Toolbar>
                    {this.props.loggedIn ? <this.logoutButton /> : null}
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavBar;