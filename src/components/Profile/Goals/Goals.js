import React from 'react';
import AddGoal from './AddGoal';
import Goal from './Goal/Goal';
import './Goals.css'

class Goals extends React.Component {
  displayDailyGoals = (goals) => {
    // Go through array of goals set in state
    return goals.map(goal => {
      // Filter by Frequency of Daily
      if (goal.frequency === "Daily") {
        let match = false;
        // console.log(goal.skill);
        if (goal.skill && goal.skill.logTimes.length) {
          goal.skill.logTimes.forEach(logTime => {
            // console.log(logTime)
            // console.log(logTime.date.substr(0,10));
            // console.log(new Date().toISOString().substr(0,10));
            if (logTime.date.substr(0,10) === new Date().toISOString().substr(0,10)) {
              return match = true;
            }
          });
        }
        if (!match) {
          return <Goal key={goal._id} goalDetail={goal} logTime={this.props.logTime} editGoal={this.props.editGoal} deleteGoal={this.props.deleteGoal} />
        }
      };
    });
  };

  displayWeeklyGoals = (goals) => {
    return goals.map(goal => {
      if (goal.frequency === "Weekly")
        return <Goal key={goal._id} goalDetail={goal} logTime={this.props.logTime} editGoal={this.props.editGoal} deleteGoal={this.props.deleteGoal} />
      })
  };

  displayMonthlyGoals = (goals) => {
    return goals.map(goal => {
      if (goal.frequency === "Monthly")
        return <Goal key={goal._id} goalDetail={goal} logTime={this.props.logTime} editGoal={this.props.editGoal} deleteGoal={this.props.deleteGoal} />
    })
  };

  // Grab Log Times of a Skill related to a Goal

  // Parse the Date of the Log times to DD-MM-YYYY

  // Compare that to Date.now() parsed to DD-MM-YYYY


  render() {
    return (
      <>
        <div className="goalsList">
          <div className="goalsListHeader">
            <h3>HERE YO GOALS</h3>
            {this.props.skills && <AddGoal skills={this.props.skills} addGoal={this.props.addGoal} />}
            {this.props.goals && <button className="btn btn-primary">Edit Goals</button> }
          </div>
          <h4>DAILY</h4>
          {this.props.goals && this.displayDailyGoals(this.props.goals)}
          <h4>WEEKLY</h4>
          {this.props.goals && this.displayWeeklyGoals(this.props.goals)}
          <h4>MONTHLY</h4>
          {this.props.goals && this.displayMonthlyGoals(this.props.goals)}
        </div>
      </>
    )
  }
}

export default Goals;