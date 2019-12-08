import React from 'react';
import EditGoal from './EditGoal/EditGoal';

const Goal = (props) => {
  const completedGoal = {
    skill: props.goalDetail.skill._id,
    minutes: props.goalDetail.duration,
    date: Date.now,
  }

  return (
    <div className="goal">
      {props.goalDetail.skill.name} {props.goalDetail.duration} mins 
      <button onClick={() => props.completeGoal(completedGoal)}>COMPLETE</button>
      <div className="goalButtons">
        <EditGoal goalDetail={props.goalDetail} editGoal={props.editGoal} />
        <button>DELETE</button>
      </div>
    </div>
  )
}

export default Goal;