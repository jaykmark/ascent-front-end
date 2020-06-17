import React from 'react';
import { Link } from 'react-router-dom';
import LogTime from '../../../LogTime/LogTime';
import './Skill.css';

function Skill(props) {
  const skillLink = `skills/${props.skillDetail._id}`
  const totalHours = Math.floor(props.skillDetail.totalMinutes / 60);
  const totalHoursFormatted = totalHours.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const minutes = props.skillDetail.totalMinutes - (totalHours * 60);

  const justOneHour = totalHours === 1;
  const multipleHours = totalHours > 1;

  const justOneMin = minutes === 1;
  const multipleMins = minutes > 1;

  return (
    <>
      <div className="card card-skill">
        <div className="card-body card-body-skill">
          <Link to={skillLink}>
            <h5 className="card-title card-title-skill">{props.skillDetail.name}</h5>
            <p className="card-text">
              {justOneHour && `${totalHoursFormatted} hour`}
              {multipleHours && `${totalHoursFormatted} hours`}
              {' '}
              {justOneMin && `${minutes} min`}
              {multipleMins && `${minutes} mins`}
            </p>
          </Link>
          <LogTime skillDetail={props.skillDetail} logTime={props.logTime} />
        </div>
      </div>
    </>
  )
}

export default Skill;