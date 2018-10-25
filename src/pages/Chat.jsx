import React, {Component} from 'react';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';
import {getMessages} from '../firebase/messages';
import { Grid } from '@material-ui/core';
import UserSetting from '../components/UserSetting';

class Chat extends Component {
    navStyle = {
        backgroundColor: 'grey'
    }

    state = {
        messages: []
    };
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        getMessages().subscribe(data => {
            this.setState({messages: data});
        });
    }

    render() {
        return (
            <Grid
                style={{height: "100%"}}
                container
                direction="row"
                alignItems="stretch">
                <Grid item sm={3} style={this.navStyle}>
                    {/* CHAT NAV */}
                    <UserSetting />
                </Grid>
                <Grid
                    style={{padding: "10px"}}
                    item sm={9}
                    container
                    direction="column"
                    alignItems="stretch"
                >
                    <Grid item xs style={{overflowY: "scroll", overflowX: "hidden"}}>
                        <MessageList messages={this.state.messages}/>
                    </Grid>
                    <Grid item>
                        <MessageInput />
                    </Grid>
                </Grid>    
            </Grid>
        );
    }
}

export default Chat;