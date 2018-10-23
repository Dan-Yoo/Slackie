import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { authState } from 'rxfire/auth';
import {auth} from './firebase';
import NavBar from './components/NavBar';
import Chat from './pages/Chat';
import Login from './pages/Login';
import './App.css';

class App extends Component {
  state = {
    loggedIn: false
  }

  constructor() {
    super()
  }

  componentDidMount() {
    authState(auth).subscribe(user => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  render() {
    return (
      <Router>
        <main>
          <NavBar loggedIn={this.state.loggedIn} />
          {(this.state.loggedIn) ? <Chat /> : <Login />}
        </main>
      </Router>
    )
  }
}

export default App;
