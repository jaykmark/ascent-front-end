import React from 'react';
import { Link } from 'react-router-dom';

function Skill(props) {
  const skillLink = `skills/${props.skillData._id}`
  return (
    <Link to={skillLink}>
      <div className="skill">
        <h4>{props.skillData.name}</h4>
        <p>TOTAL TIME: {props.skillData.totalMinutes} mins</p>
      </div>
    </Link>
  )
}

export default Skill;