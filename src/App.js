// External Modules
import React from 'react';
import { withRouter } from 'react-router-dom';

// Internal Modules
import Navbar from './components/Navbar/Navbar';
import Routes from './config/Routes';

// CSS
import './App.css';

class App extends React.Component {
  state = {
    // Set current user from local storage token
    currentUser: localStorage.getItem('uid'),
  };

  setCurrentUser = (token) => {
    // Set user token as the current user
    this.setState({ currentUser: token });
    localStorage.setItem('uid', token);
  }

  render() {
    return (
      <div className="App">
        <Navbar currentUser={this.state.currentUser} />
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
      </div>
    );
  }
}

export default withRouter(App);
