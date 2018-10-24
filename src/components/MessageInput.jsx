import React, {Component} from 'react';
import {addMessage} from '../firebase/messages';
import TextField from '@material-ui/core/TextField';

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

        // TODO:: scroll to bottom for messageList
    }

    render() {
        return (
            <form style={{width: "100%"}} onSubmit={this.handleSubmit} noValidate autoComplete="off">
                <TextField
                    style={{width: "100%"}}
                    label="Message"
                    value={this.state.value}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="filled"
                />
            </form>
        )
    }
}

export default MessageInput;