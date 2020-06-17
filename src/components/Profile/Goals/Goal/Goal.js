import React from 'react';
import EditGoal from './EditGoal/EditGoal';
import './Goal.css';



const Goal = (props) => {
  const { skill, duration } = props.goalDetail;

  const logTime = {
    skill: skill._id,
    minutes: duration,
    date: '',
  }

  const totalHours = Math.floor(duration / 60);
  const minutes = duration - (totalHours * 60);

  const justOneHour = totalHours === 1;
  const multipleHours = totalHours > 1;
  const justOneMin = minutes === 1;
  const multipleMins = minutes > 1;

  return (
    <>
      <div className="card card-goal">
        <div className="card-body card-body-goal">
          <div className="card-header-goal">
            <h5 className="card-title card-title-goal">{skill.name}</h5>
            <p className="card-text card-text-goal">
              {justOneHour && `${totalHours} hour`}
              {multipleHours && `${totalHours} hours`}
              {' '}
              {justOneMin && `${minutes} min`}
              {multipleMins && `${minutes} mins`}
            </p>
          </div>
          <button className="btn btn-primary btn-sm btn-complete" onClick={(event) => {
            logTime.date = new Date().toLocaleString();
            props.logTime(event, logTime)
          }}>COMPLETE</button>
        </div>
      </div>
      <EditGoal goalDetail={props.goalDetail} editGoal={props.editGoal} deleteGoal={props.deleteGoal} />
    </>
  )
}

export default Goal;