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

  addSkill(event, createdPost) {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/skills`, createdPost, { withCredentials: true }) 
      .then(res => {
      console.log(res.data.data);
      // this.setState({
      //   skills: [...this.state.skills, res.data.data]
      // })
    })
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <>
      <h2>HERE'S YOUR PROFILE, {this.state.user.username}</h2>
      <Skills user={this.state.user} addSkill={this.addSkill} />
      </>
    )
  }

}

export default ProfileContainer;