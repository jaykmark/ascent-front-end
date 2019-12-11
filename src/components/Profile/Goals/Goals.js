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
        let completed = false;
        // console.log(goal.skill);
        if (goal.skill && goal.skill.logTimes.length) {
          goal.skill.logTimes.forEach(logTime => {
            // console.log(logTime)
            // console.log(logTime.date.substr(0,10));
            // console.log(new Date().toISOString().substr(0,10));
            if (logTime.date.substr(0,10) === new Date().toISOString().substr(0,10)) {
              return completed = true;
            }
          });
        }
        if (!completed) {
          return <Goal key={goal._id} goalDetail={goal} logTime={this.props.logTime} editGoal={this.props.editGoal} deleteGoal={this.props.deleteGoal} />
        }
      };
      return null;
    });
  };

  displayWeeklyGoals = (goals) => {
    // Go through array of goals set in state
    return goals.map(goal => {
      // Filter by Frequency of Weekly
      if (goal.frequency === "Weekly") {
        let completed = false;
        if (goal.skill && goal.skill.logTimes.length) {
          // Go through each log time and see if it has been within the last week
          goal.skill.logTimes.forEach(logTime => {
            if (Date.now() -  Date.parse(logTime.date) < 604800000) {
              return completed = true;
            }
          })
        }
        if (!completed) {
          return <Goal key={goal._id} goalDetail={goal} logTime={this.props.logTime} editGoal={this.props.editGoal} deleteGoal={this.props.deleteGoal} />
        }
      }
      return null;
    })
  };

  displayMonthlyGoals = (goals) => {
    return goals.map(goal => {
      if (goal.frequency === "Monthly")
        return <Goal key={goal._id} goalDetail={goal} logTime={this.props.logTime} editGoal={this.props.editGoal} deleteGoal={this.props.deleteGoal} />
      return null;
    })
  };

  render() {
    return (
      <>
        <div className="goalsList">
          <div className="goalsListHeader">
            <h3>HERE YO GOALS</h3>
            {this.props.skills.length ? <AddGoal skills={this.props.skills} addGoal={this.props.addGoal} /> : null}
          </div>
          {!this.props.skills.length ? <p className="goal-alert">Add a skill and make a goal for it!</p> : null}
          {this.props.goals.length ? <h4>DAILY</h4> : null }
          {this.props.goals.length ? this.displayDailyGoals(this.props.goals) : null}
          {this.props.goals.length ? <h4>WEEKLY</h4> : null }
          {this.props.goals.length ? this.displayWeeklyGoals(this.props.goals) : null}
          {this.props.goals.length ? <h4>MONTHLY</h4> : null}
          {this.props.goals.length ? this.displayMonthlyGoals(this.props.goals) : null}
        </div>
      </>
    )
  }
}

export default Goals;