import React from 'react';
import axios from 'axios';

import Skills from '../components/Skills/Skills';

class ProfileContainer extends React.Component {
  state = {
    user: {},
    skills: [],
    goals: [],
  };

  componentDidMount() {
    // API GET Request - User data and set it to state
    axios.get(`${process.env.REACT_APP_API_URL}/users`, { headers: {
      authorization: `Bearer ${localStorage.uid}` 
    }})
      .then(res => {
        console.log(res.data.data);
        this.setState({
          user: res.data.data,
          skills: res.data.data.skills,
        })
      })
      .catch(err => console.log(err));
  };

  addSkill = (event, createdPost) => {
    event.preventDefault();
    // API POST Request - Create a skill and add to user's model
    axios.post(`${process.env.REACT_APP_API_URL}/skills`, createdPost) 
      .then(res => {
      // console.log(res.data.data);
      this.setState({
        skills: [...this.state.skills].concat(res.data.data),
      })
      console.log(this.state.skills)
    })
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <>
      <h2>HERE'S YOUR PROFILE, {this.state.user.username}</h2>
      {this.state.user._id && <Skills user={this.state.user} skills={this.state.user.skills} addSkill={this.addSkill} /> }
      </>
    )
  }

}

export default ProfileContainer;