import React, {Component} from 'react';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';
import {getMessages} from '../firebase/messages';
import { Grid } from '@material-ui/core';

class Chat extends Component {
    navStyle = {
        backgroundColor: 'grey'
    }

    state = {
        messages: []
    };

    componentDidMount() {
        getMessages().subscribe(data => {
            this.setState({messages: data});
        });

        setTimeout(this.scrollToBottom, 1000)
    }

    scrollToBottom() {
        let container = document.getElementById("message-list");
        container.scrollIntoView({behavior: "instant", block: "end"});
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
                    {/* <UserSetting /> */}
                </Grid>
                <Grid
                    style={{padding: "10px", paddingTop: "0"}}
                    item sm={9}
                    container
                    direction="column"
                    alignItems="stretch"
                >
                    <Grid item xs style={{overflowY: "scroll", overflowX: "hidden"}}>
                        <MessageList messages={this.state.messages}/>
                    </Grid>
                    <Grid item>
                        <MessageInput scrollToBottom={this.scrollToBottom}/>
                    </Grid>
                </Grid>    
            </Grid>
        );
    }
}

export default Chat;