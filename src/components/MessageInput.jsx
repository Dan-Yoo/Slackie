import React, {Component} from 'react';
import {addMessage} from '../firebase/messages';
import TextField from '@material-ui/core/TextField';
import { authState } from 'rxfire/auth';
import { auth } from '../firebase';

class MessageInput extends Component {
    state = {
        author: '',
        message: ''
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        authState(auth).subscribe(auth => {
            this.setState({author: auth.uid});
        });
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({message: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        addMessage(this.state.message, this.state.author);

        this.setState({message: ''});

        // TODO:: scroll to bottom for messageList
    }

    render() {
        return (
            <form style={{width: "100%"}} onSubmit={this.handleSubmit} noValidate autoComplete="off">
                <TextField
                    style={{width: "100%"}}
                    label="Message"
                    message={this.state.message}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="filled"
                />
            </form>
        )
    }
}

export default MessageInput;