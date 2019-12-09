import React from 'react';
import AddGoal from './AddGoal';
import Goal from './Goal/Goal';
import './Goals.css'

class Goals extends React.Component {
  displayDailyGoals = (goals) => {
    return goals.map(goal => {
      if (goal.frequency === "Daily")
        return <Goal key={goal._id} goalDetail={goal} logTime={this.props.logTime} editGoal={this.props.editGoal} deleteGoal={this.props.deleteGoal} />
    })
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


  render() {
    return (
      <>
        <div className="goalsList">
          <div className="goalsListHeader">
            <h3>HERE YO GOALS</h3>
            {this.props.skills && <AddGoal skills={this.props.skills} addGoal={this.props.addGoal} />}
            {this.props.goals && <button className="btn btn-primary">Edit Goals</button> }
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