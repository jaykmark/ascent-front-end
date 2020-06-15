import React from 'react';
import EditGoal from './EditGoal/EditGoal';
import './Goal.css';

const Goal = (props) => {
  const logTime = {
    skill: props.goalDetail.skill._id,
    minutes: props.goalDetail.duration,
    date: Date.now,
  }
  const totalHours = Math.floor(props.goalDetail.duration / 60);
  const minutes = props.goalDetail.duration - (totalHours * 60);

  const justOneHour = totalHours === 1;
  const multipleHours = totalHours > 1;

  return (
    <>
      <div className="card card-goal">
        <div className="card-body card-body-goal">
          <div className="card-header-goal">
            <h5 className="card-title card-title-goal">{props.goalDetail.skill.name}</h5>
            <p className="card-text card-text-goal">
              {justOneHour && `${totalHours} hour`}
              {multipleHours && `${totalHours} hours`}
              {' '}
              {minutes > 0 && `${minutes} mins`}
            </p>
          </div>
          <button className="btn btn-primary btn-sm btn-complete" onClick={(event) => props.logTime(event, logTime)}>COMPLETE</button>
        </div>
      </div>
      <EditGoal goalDetail={props.goalDetail} editGoal={props.editGoal} deleteGoal={props.deleteGoal} />
    </>
  )
}

export default Goal;