// External Modules
import React from 'react';
import { withRouter } from 'react-router-dom';

// Internal Modules
import Navbar from './components/Navbar/Navbar';
import Routes from './config/routes';

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

  logout = () => {
    // Remove JWT from local storage.
    localStorage.removeItem('uid');
    // Set State of Current User to null.
    this.setState({
      currentUser: null,
    });
    this.props.history.push('/login');
  }

  render() {
    return (
      <>
        <Navbar currentUser={this.state.currentUser} logout={this.logout} />
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
      </>
    );
  }
}

export default withRouter(App);
