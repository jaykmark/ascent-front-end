import React from 'react';
import AddGoal from './AddGoal';
import Goal from './Goal/Goal';
import './Goals.css'

class Goals extends React.Component {
  displayDailyGoals = (goals) => {
    return goals.map(goal => {
      if (goal.frequency === "Daily")
        return <Goal key={goal._id} goalDetail={goal} completeGoal={this.props.completeGoal} editGoal={this.props.editGoal} skills={this.props.skills} />
    })
  };

  displayWeeklyGoals = (goals) => {
    return goals.map(goal => {
      if (goal.frequency === "Weekly")
        return <Goal key={goal._id} goalDetail={goal} completeGoal={this.props.completeGoal} editGoal={this.props.editGoal} skills={this.props.skills} />
    })
  };

  displayMonthlyGoals = (goals) => {
    return goals.map(goal => {
      if (goal.frequency === "Monthly")
        return <Goal key={goal._id} goalDetail={goal} completeGoal={this.props.completeGoal} editGoal={this.props.editGoal} skills={this.props.skills} />
    })
  };


  render() {
    return (
      <>
        <div className="goalsList">
          <div className="goalsListHeader">
            <h3>HERE YO GOALS</h3>
            <AddGoal skills={this.props.skills} addGoal={this.props.addGoal} />
            <button className="btn btn-primary">Edit Goals</button>
          </div>
          <h3>DAILY</h3>
            {this.props.goals && this.displayDailyGoals(this.props.goals)}
          <h3>WEEKLY</h3>
            {this.props.goals && this.displayWeeklyGoals(this.props.goals)}
          <h3>MONTHLY</h3>
            {this.props.goals && this.displayMonthlyGoals(this.props.goals)}
        </div>
      </>
    )
  }
}

export default Goals;