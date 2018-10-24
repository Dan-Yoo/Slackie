import React, {Component} from 'react';
import Message from './Message';

class MessageList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                {this.props.messages.map(function(message, index){
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
