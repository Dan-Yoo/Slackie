import React, {Component} from 'react';
import Message from './Message';
import { getAllUsers } from '../firebase/users';

class MessageList extends Component {
    state = {
        users: {}
    }

    componentDidMount() {
        getAllUsers().subscribe(users => {
            console.log("USERS ", users);
            if (users) {
                this.setState({users: users})
            }
        });

        // scroll to bottom
        // setTimeout(this.scrollToBottom, 1000);
    }

    scrollToBottom() {
        let container = document.getElementById("message-list");
        container.scrollIntoView({behavior: "instant", block: "end"});
    }

    render() {
        return (
            <main id="message-list">
                {this.props.messages.map((message, index) => {
                    { 
                        let user = this.state.users[message.author];
                        if (user !== undefined) message.username = user.username;
                    }
                    return (
                        <div key={index}>
                            <Message msgObj={message}/>
                        </div>
                    )
                })}
            </main>
        )
    }
}

export default MessageList;
