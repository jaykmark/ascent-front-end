import React from 'react';
import { Link } from 'react-router-dom';
import LogTime from '../../../LogTime/LogTime';

function Skill(props) {
  const skillLink = `skills/${props.skillDetail._id}`
  return (
    <>
    <Link to={skillLink}>
      <div className="skill">
        <h4>{props.skillDetail.name}</h4>
        <p>TOTAL TIME: {props.skillDetail.totalMinutes} mins</p>
      </div>
    </Link>
    <LogTime skillDetail={props.skillDetail} logTime={props.logTime} />
    </>
  )
}

export default Skill;