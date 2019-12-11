import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark nav-bar">
        <div className="container">
          {this.props.currentUser ? 
          <a className="navbar-brand" href="/profile">ASCENT</a>
          :
          <a className="navbar-brand" href="/">ASCENT</a>
          }
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav ml-auto">
          {this.props.currentUser ? 
              <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Home</NavLink>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="" onClick={() => this.props.logout()}>Logout</span>
              </li>
              </>
          :
              <>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">Register</a>
              </li>
              </>
          }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;