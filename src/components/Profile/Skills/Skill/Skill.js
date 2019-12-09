import React from 'react';
import { Link } from 'react-router-dom';
import LogTime from '../../../LogTime/LogTime';
import './Skill.css';

function Skill(props) {
  const skillLink = `skills/${props.skillDetail._id}`
  return (
    <>
    <div className="skill">
      <Link to={skillLink}>
        <div className="skillName">
          <h4>{props.skillDetail.name}</h4>
          <p>TOTAL TIME: {props.skillDetail.totalMinutes} mins</p>
        </div>
      </Link>
      <LogTime skillDetail={props.skillDetail} logTime={props.logTime} />
    </div>
    </>
  )
}

export default Skill;