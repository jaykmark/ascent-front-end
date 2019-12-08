import React from 'react';
import { Link } from 'react-router-dom';
import LogTime from '../../../LogTime/LogTime';

function Skill(props) {
  const skillLink = `skills/${props.skillData._id}`
  return (
    <Link to={skillLink}>
      <div className="skill">
        <h4>{props.skillData.name}</h4>
        <p>TOTAL TIME: {props.skillData.totalMinutes} mins</p>
        <LogTime />
      </div>
    </Link>
  )
}

export default Skill;