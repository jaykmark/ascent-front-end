import React from 'react';
import { Link } from 'react-router-dom';
import LogTime from '../../../LogTime/LogTime';
import './Skill.css';

function Skill(props) {
  const skillLink = `skills/${props.skillDetail._id}`
  const totalHours = Math.floor(props.skillDetail.totalMinutes / 60);
  const minutes = props.skillDetail.totalMinutes - (totalHours * 60);

  return (
    <>
    {/* <div className="skill col-12">
      <Link to={skillLink}>
        <div className="skillName">
          <h4>{props.skillDetail.name}</h4>
          <p>{totalHours} hours {minutes} mins</p>
        </div>
      </Link>
      <LogTime skillDetail={props.skillDetail} logTime={props.logTime} />
    </div> */}

    <div className="card card-skill">
      <div className="card-body card-body-skill">
          <Link to={skillLink}>
            <h5 className="card-title card-title-skill">{props.skillDetail.name}</h5>
            <p className="card-text">{totalHours} hours {minutes > 0 ? `${minutes} mins` : null}</p>
          </Link>
          <LogTime skillDetail={props.skillDetail} logTime={props.logTime} />
      </div>
    </div>




    </>
  )
}

export default Skill;