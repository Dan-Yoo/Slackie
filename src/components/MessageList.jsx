import React, {Component} from 'react';
import Message from './Message';
import { getAllUsers } from '../firebase/users';

class MessageList extends Component {
    state = {
        users: {}
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        getAllUsers().subscribe(users => {
            console.log("USERS ", users);
            if (users) {
                this.setState({users: users})
            }
        });
    }

    render() {
        return (
            <main>
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
