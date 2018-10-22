import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Chat from './pages/Chat';
import Login from './pages/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <h1>APP (put nav here)</h1>
          <Route exact path="/" component={Login} />
          <Route path="/chat" component={Chat} />
        </main>
      </Router>
    )
  }
}

export default App;
