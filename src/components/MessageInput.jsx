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
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                <TextField
                    label="Message"
                    value={this.state.value}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="filled"
                />
            </form>
        //     <form className={classes.container} noValidate autoComplete="off">
        // <TextField
        //   id="filled-name"
        //   label="Name"
        //   className={classes.textField}
        //   value={this.state.name}
        //   onChange={this.handleChange('name')}
        //   margin="normal"
        //   variant="filled"
        // />
            // <form onSubmit={this.handleSubmit}>
            //     <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Press Enter to send'/>
            // </form>
        )
    }
}

export default MessageInput;