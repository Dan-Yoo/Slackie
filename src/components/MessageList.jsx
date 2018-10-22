import React, {Component} from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <h1>MessageList</h1>
                {this.props.messages.map(function(message, index){
                    return (
                        <div key={index}>
                            <h3>{message.message}</h3>
                            {/* <div>{console.log('message created %o', message.created)}</div>  */}
                        </div>
                    )
                })}
            </main>
        )
    }
}

export default MessageList;
