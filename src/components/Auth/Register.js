import React from 'react';
import axios from 'axios';
import './Auth.css';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
    errors: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newUser = this.state;
    axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, newUser)
      .then(res => {
        // After registering, API POST Request to Login
        return axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, newUser)
        .then(res => {
          this.props.setCurrentUser(res.data.signedJwt);
          this.props.history.push('/profile')
          })
        .catch(err => console.log(err))
      })
      .catch(err => {
        this.setState({ errors: err.response.data.errors });
      })
  };

  render() {
    return (
      <div className="register-screen">
        <div className="flex">
          {this.state.errors && this.state.errors.map((error, index) => (
            <div className="alert alert-danger alert-dismissible fade show" style={{width: '100%'}} role="alert" key={index}>
              {error.message}
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ))}
          <section id="register" className="register">
            <h2 className="mb-4">Register</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                {/* <label htmlFor="username">Username</label> */}
                <input type="username" id="username" name="username" value={this.state.username} onChange={this.handleChange} className="form-control form-control-lg" required placeholder="Username"/>
              </div>
              <div className="form-group">
                {/* <label htmlFor="email">Email</label> */}
                <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control form-control-lg" required placeholder="Email"/>
              </div>
              <div className="form-group">
                {/* <label htmlFor="password">Password</label> */}
                <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control form-control-lg" required placeholder="Password"/>
              </div>
              <div className="form-group">
                {/* <label htmlFor="password2">Confirm Password</label> */}
                <input type="password" id="password2" name="password2" value={this.state.password2} onChange={this.handleChange} className="form-control form-control-lg" required placeholder="Confirm Password"/>
              </div>
              <button type="submit" className="btn btn-primary float-right btn-auth">Register</button>
            </form>
          </section>
        </div>
      </div>
    );
  };
};

export default Register;