import React from 'react';
import axios from 'axios';

import Skills from '../components/Skills/Skills';

class ProfileContainer extends React.Component {
  state = {
    user: {}
  };

  componentDidMount() {
    // API GET Request - User data and set it to state
    axios.get(`${process.env.REACT_APP_API_URL}/users/`, { headers: {
      authorization: `Bearer ${localStorage.uid}` 
    }})
      .then(res => {
        console.log(res.data.data);
        this.setState({
          user: res.data.data
        })
      })
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <>
      <h2>HERE'S YOUR PROFILE, {this.state.user.username}</h2>
        <Skills user={this.state.user}/>
      </>
    )
  }

}

export default ProfileContainer;