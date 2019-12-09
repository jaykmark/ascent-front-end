import React from 'react';
import axios from 'axios';

import Skills from '../components/Profile/Skills/Skills';
import Goals from '../components/Profile/Goals/Goals';

import '../components/Profile/Profile.css';

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
        const goals = this.grabGoals(res.data.data.skills);
        this.setState({
          user: res.data.data,
          skills: res.data.data.skills,
          goals: goals,
        })
      })
      .catch(err => console.log(err));
  };

  // Loop through each skill and grab the goals to consolidate in one array.
  grabGoals = (skills) => {
    const goalsArr = [];
    skills.forEach(skill => {
      if (skill.goals) goalsArr.push(skill.goals)
    })
    return goalsArr;
  }

  addSkill = (event, createdSkill) => {
    event.preventDefault();
    // API POST Request - Create a skill and add to user's model
    axios.post(`${process.env.REACT_APP_API_URL}/skills`, createdSkill) 
      .then(res => {
      this.setState({
        skills: [...this.state.skills, res.data.data],
      })
      console.log(this.state.skills)
    })
      .catch(err => console.log(err));
  };

  addGoal = (event, createdGoal) => {
    event.preventDefault();
    // API POST Request - Create a goal and add to skill's model
    axios.post(`${process.env.REACT_APP_API_URL}/goals`, createdGoal)
      .then(res => {
        const filteredGoals = this.state.goals.filter(goal => {
          if (goal.skill._id !== res.data.data.skill) return goal;
        })
        this.setState({
          goals: [...filteredGoals, res.data.data],
        })
      })
      .catch(err => console.log(err));
  };

  logTime = (event, logTime) => {
    event.preventDefault();
    // API POST Request - Create a LogTime and add to minutes Skill's Model
    axios.post(`${process.env.REACT_APP_API_URL}/logtimes`, logTime)
      .then(res => {
        const filteredSkills = this.state.skills.filter(skill => {
          if (skill._id !== res.data.data._id) return skill;
        })
        this.setState({
          skills: [...filteredSkills, res.data.data],
        })
      })
      .catch(err => console.log(err))
  };

  editGoal = (event, editedGoal) => {
    event.preventDefault();
    // API PUT Request - Update a Goal by ID
    axios.put(`${process.env.REACT_APP_API_URL}/goals/${editedGoal.goal}`, editedGoal)
      .then(res => {
        const filteredGoals = this.state.goals.filter(goal => {
          if (goal._id !== res.data.data._id) return goal;
        })
        console.log(res.data.data);
        this.setState({
          goals: [...filteredGoals, res.data.data],
        })
      })
      .catch(err => console.log(err))
  };

  deleteGoal = (event, deletedGoal) => {
    event.preventDefault();
    axios.delete(`${process.env.REACT_APP_API_URL}/goals/${deletedGoal}`, deletedGoal)
      .then(res => {
        const filteredGoals = this.state.goals.filter(goal => {
          if (goal._id !== res.data.data._id) return goal;
        })
        this.setState({
          goals: [...filteredGoals, res.data.data],
        })
      })
      .catch(err => console.log(err))
  };
  
  render() {
    return (
      <>
        <h2>GIT GUD, {this.state.user.username}</h2>
        <div className="profileBody">
          {this.state.user._id && <Skills user={this.state.user} skills={this.state.skills} addSkill={this.addSkill} logTime={this.logTime} /> }
          {this.state.user._id && <Goals user={this.state.user} skills={this.state.skills} goals={this.state.goals} addGoal={this.addGoal} logTime={this.logTime} editGoal={this.editGoal} deleteGoal={this.deleteGoal} /> }
        </div>
      </>
    )
  }

}

export default ProfileContainer;