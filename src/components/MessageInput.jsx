import React, {Component} from 'react';
import {addMessage} from '../firebase/messages';

class MessageInput extends Component {
    state = {
        value: ''
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        addMessage(this.state.value, 'Daniel Yoo');

        this.setState({value: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Press Enter to send'/>
            </form>
        )
    }
}

export default MessageInput;