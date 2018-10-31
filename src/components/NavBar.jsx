import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Person from '@material-ui/icons/Person'
import { Toolbar, Button, Menu, MenuItem } from '@material-ui/core';
import { logout } from '../firebase/auth';
import { UserSettingDialog } from './UserSettingDialog';

class NavBar extends Component {
    state = {
        openMenu: null,
        openProfile: false
    }

    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.toggleProfile = this.toggleProfile.bind(this);
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

    toggleProfile() {
        this.setState({openProfile: !this.state.openProfile});
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
                        {/* route to profile path actually */}
                        <MenuItem onClick={this.toggleProfile}>Profile</MenuItem>
                        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
                {/* <UserSettingDialog
                    open={this.state.openProfile}
                    onClose={this.toggleProfile}
                /> */}
            </AppBar>
        )
    }
}

export default NavBar;