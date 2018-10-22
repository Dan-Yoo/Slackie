import React, { Component } from 'react';
import {getMessages} from './firebase/messages';
import './App.css';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';

class App extends Component {
  state = {
    messages: []
  };
  
  constructor() {
    super();
  }

  componentDidMount() {
    getMessages().subscribe(data => {
      this.setState({messages: data});

      console.log("state %o", this.state.messages);
    });
  }

  render() {
    return (
      <div className="App">
        <MessageList messages={this.state.messages}/>
        <MessageInput />
      </div>
    );
  }
}

export default App;
