import React, {Component} from 'react';

class MessageInput extends Component {
    render() {
        return (
            <form>
                <input type='text' placeholder='Press Enter to send'/>
            </form>
        )
    }
}

export default MessageInput;