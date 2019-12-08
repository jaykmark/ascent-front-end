import React from 'react';
import EditGoal from './EditGoal/EditGoal';
import './Goal.css';

const Goal = (props) => {
  const completedGoal = {
    skill: props.goalDetail.skill._id,
    minutes: props.goalDetail.duration,
    date: Date.now,
  }

  return (
    <div className="goal">
      {props.goalDetail.skill.name} {props.goalDetail.duration} mins 
      <button className="btn btn-primary" onClick={() => props.completeGoal(completedGoal)}>COMPLETE</button>
      <div className="goalButtons">
        <EditGoal goalDetail={props.goalDetail} editGoal={props.editGoal} deleteGoal={props.deleteGoal} />
      </div>
    </div>
  )
}

export default Goal;