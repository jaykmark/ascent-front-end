import React from 'react';
import AddGoal from './AddGoal';
import Goal from './Goal/Goal';
import './Goals.css'

class Goals extends React.Component {
  displayGoals = (goals) => {
    return goals.map(goal => {
      return <Goal key={goal._id} goalData={goal} completeGoal={this.props.completeGoal} />
    })
  }
  render() {
    return (
      <>
        <div className="goalsList">
          <h3>HERE YO GOALS</h3>
          <AddGoal skills={this.props.skills} addGoal={this.props.addGoal} />
          <button className="btn btn-primary">Edit Goals</button>
          <div className="dailyGoals">DAILY</div>
            {this.props.goals && this.displayGoals(this.props.goals)}
          {/* <div className="weeklyGoals">WEEKLY</div>
            {this.props.goals.frequency === "Monthly" && this.displayGoals(this.props.goals)} */}
        </div>
      </>
    )
  }
}

export default Goals;