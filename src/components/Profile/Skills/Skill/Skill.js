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

    <div className="card">
    <div className="card-body">
      <div className="row justify-content-center">
        <div className="col-8">
          <Link to={skillLink}>
            <h5 className="card-title">{props.skillDetail.name}</h5>
            <p className="card-text mt-2">{totalHours} hours {minutes} mins</p>
          </Link>
        </div>
        <div className="col-4">
          <LogTime skillDetail={props.skillDetail} logTime={props.logTime} />
        
        </div>
      </div>
    </div>
    </div>




    </>
  )
}

export default Skill;