import React from "react";
import axios from "axios";

import Skills from "../components/Profile/Skills/Skills";
import Goals from "../components/Profile/Goals/Goals";

import loadingSvg from '../assets/images/loading.svg'
import "../components/Profile/Profile.css";

class ProfileContainer extends React.Component {
  state = {
    user: {},
    skills: [],
    goals: [],
    loading: true,
  };

  componentDidMount() {
    // API GET Request - User data and set it to state
    axios
      .get(`${process.env.REACT_APP_API_URL}/users`, {
        headers: {
          authorization: `Bearer ${localStorage.uid}`
        }
      })
      .then(res => {
        const goals = this.grabGoals(res.data.data.skills);
        const sortedSkills = res.data.data.skills.sort(
          (a, b) => b.totalMinutes - a.totalMinutes
        );
        this.setState({
          user: res.data.data,
          skills: sortedSkills,
          goals: goals,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  }

  // Loop through each skill and grab the goals to consolidate into one array.
  grabGoals = (skills) => {
    return skills.map((skill) => {
      return skill.goals
    });
  };

  addSkill = (event, createdSkill) => {
    event.preventDefault();
    // API POST Request - Create a skill and add to user's model
    axios
      .post(`${process.env.REACT_APP_API_URL}/skills`, createdSkill)
      .then(res => {
        const sortedSkills = [...this.state.skills, res.data.data]
        sortedSkills.sort(
          (a, b) => b.totalMinutes - a.totalMinutes
        );
        this.setState({
          skills: sortedSkills
        });
      })
      .catch(err => console.log(err));
  };

  addGoal = (event, createdGoal) => {
    event.preventDefault();
    // API POST Request - Create a goal and add to skill's model
    axios
      .post(`${process.env.REACT_APP_API_URL}/goals`, createdGoal)
      .then(res => {
        if (this.state.goals.length) {
          this.setState({
            goals: [...this.state.goals, res.data.data]
          });
        } else {
          this.setState({
            goals: [res.data.data]
          });
        }
      })
      .catch(err => console.log(err));
  };

  logTime = (event, logTime) => {
    event.preventDefault();
    // API POST Request - Create a LogTime and add to minutes Skill's Model
    axios
      .post(`${process.env.REACT_APP_API_URL}/logtimes`, logTime)
      .then(res => {
        if (!res.data.data.goals) {
          const filteredSkills = this.state.skills.filter(skill => {
            return skill._id !== res.data.data._id;
          });
          const sortedSkills = [...filteredSkills, res.data.data].sort(
            (a, b) => b.totalMinutes - a.totalMinutes
          );
          this.setState({
            skills: sortedSkills
          });
        } else {
          const filteredSkills = this.state.skills.filter(skill => {
            return skill._id !== res.data.data._id;
          });
          const sortedSkills = [...filteredSkills, res.data.data].sort(
            (a, b) => b.totalMinutes - a.totalMinutes
          );
          const filteredGoals = this.state.goals.filter(goal => {
            return goal._id !== res.data.data.goals._id;
          });
          this.setState({
            skills: sortedSkills,
            goals: [...filteredGoals, res.data.data.goals]
          });
        }
      })
      .catch(err => console.log(err));
  };

  editGoal = (event, editedGoal) => {
    event.preventDefault();
    // API PUT Request - Update a Goal by ID
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/goals/${editedGoal.goal}`,
        editedGoal
      )
      .then(res => {
        const filteredGoals = this.state.goals.filter(goal => {
          return goal._id !== res.data.data._id;
        });
        this.setState({
          goals: [...filteredGoals, res.data.data]
        });
      })
      .catch(err => console.log(err));
  };

  deleteGoal = (event, deletedGoal) => {
    event.preventDefault();
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/goals/${deletedGoal}`,
        deletedGoal
      )
      .then(res => {
        const filteredGoals = this.state.goals.filter(goal => {
          return goal._id !== res.data.data._id;
        });
        if (filteredGoals.length > 0) {
          this.setState({
            goals: filteredGoals
          });
        } else {
          this.setState({
            goals: []
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="profile">
        <div className="container">
          {this.state.loading && (
            <div className="loadingContainer">
              <img src={loadingSvg} alt="loading" />
            </div>
          )}
          {this.state.user._id && (
            <>
              <h2>Greetings, {this.state.user.username}</h2>
              <div className="profileBody">
                <Skills
                  user={this.state.user}
                  skills={this.state.skills}
                  addSkill={this.addSkill}
                  logTime={this.logTime}
                />
                <Goals
                  user={this.state.user}
                  skills={this.state.skills}
                  goals={this.state.goals}
                  addGoal={this.addGoal}
                  logTime={this.logTime}
                  editGoal={this.editGoal}
                  deleteGoal={this.deleteGoal}
                />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileContainer;
