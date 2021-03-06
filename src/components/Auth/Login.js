import React from 'react';
import axios from 'axios';
import './Auth.css';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    error: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }); 
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = this.state;
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, user)
      .then(res => {
        this.props.setCurrentUser(res.data.signedJwt);
        this.props.history.push('/profile');
      })
      .catch(err => {
        this.setState({ 
          error: err.response.data.message
        });
      });
  };

  render() {
    return (
      <div className="login-screen">
      <div className="flex">
        {this.state.error && (
          <div className="alert alert-danger alert-dismissible fade show" style={{width: '100%'}} role="alert">
            {this.state.error}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        <section id="login" className="login">
          <h2 className="mb-4">Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="username" id="username" name="username" value={this.state.username} onChange={this.handleChange} className="form-control form-control-lg" required placeholder="Username" />
            </div>
            <div className="form-group">
              <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control form-control-lg" required placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary float-right btn-auth">Login</button>
          </form>
        </section>
      </div>
      </div>
    );
  };
};

export default Login;
