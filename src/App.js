import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { authState } from 'rxfire/auth';
import {auth} from './firebase';
import NavBar from './components/NavBar';
import Chat from './pages/Chat';
import Login from './pages/Login';
import './App.css';
import { Grid } from '@material-ui/core';

class App extends Component {
  state = {
    loggedIn: false
  }

  constructor() {
    super()
  }

  componentDidMount() {
    authState(auth).subscribe(user => {
      console.log(user);
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
        <Grid
          style={{height: "100%", overflow: "hidden"}}
          container
          direction="column"
          alignItems="stretch">
          <Grid item>
            <NavBar loggedIn={this.state.loggedIn} />
          </Grid>
          <Grid item xs style={{overflow: "hidden"}}>
            {(this.state.loggedIn) ? <Chat /> : <Login />}
          </Grid>
        </Grid>
      </Router>
    )
  }
}

export default App;
