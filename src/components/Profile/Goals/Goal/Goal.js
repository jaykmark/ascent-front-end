import React from 'react';

const Goal = (props) => {
  const completedGoal = {
    skill: props.goalData.skill._id,
    minutes: props.goalData.duration,
    date: Date.now,
  }

  return (
    <div className="goal">
      {props.goalData.skill.name} {props.goalData.duration} mins 
      <button onClick={(event) => props.completeGoal(event, completedGoal)}>COMPLETE</button>
      <div className="goalButtons">
        <button>EDIT</button>
        <button>DELETE</button>
      </div>
    </div>
  )
}

export default Goal;