import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Person from '@material-ui/icons/Person'
import { Toolbar, Button, Menu, MenuItem } from '@material-ui/core';
import { logout } from '../firebase/auth';

class NavBar extends Component {
    state = {
        openMenu: null
    }

    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleMenuClick(e) {
        this.setState({openMenu: e.currentTarget});
    }

    handleClose() {
        this.setState({openMenu: null});
    }

    handleLogout() {
        this.handleClose();
        logout();
    }

    render() {
        return (
            <AppBar position="relative">
                <Toolbar>   
                    <Button onClick={this.handleMenuClick}>
                        <Person />
                    </Button>
                    {/* {this.props.loggedIn ? <this.logoutButton /> : null} */}
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.openMenu}
                        open={Boolean(this.state.openMenu)}
                        onClose={this.handleClose}
                    >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavBar;