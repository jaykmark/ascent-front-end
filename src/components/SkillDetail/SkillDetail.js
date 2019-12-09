import React from 'react';
import LogTime from '../LogTime/LogTime';
import EditSkill from './EditSkill/EditSkill';
import DeleteSkill from './DeleteSkill/DeleteSkill';
import './SkillDetail.css';

function SkillDetail(props) {
  const { name, description, notes, totalMinutes } = props.skillDetail;
  return (
    <>
      <div className="skillDetailPage">
        <h3>{name}</h3>
        <div className="skillDetailTotalMinutes">
          {totalMinutes} mins
          <LogTime skillDetail={props.skillDetail} logTime={props.logTime} />
        </div>
      <EditSkill skillDetail={props.skillDetail} editSkill={props.editSkill}/>
      <p>Description: {description}</p>
      <p>Notes: {notes}</p>
      <DeleteSkill skillDetail={props.skillDetail} deleteSkill={props.deleteSkill}/>
      </div>
    </>
  )
}

export default SkillDetail;