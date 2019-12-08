import React from 'react';
import LogTime from '../LogTime/LogTime';
import EditSkill from './EditSkill/EditSkill';
import DeleteSkill from './DeleteSkill/DeleteSkill';

function SkillDetail(props) {
  const { name, description, notes, totalMinutes } = props.skillDetail;
  return (
    <>
      <div>
        <h3>{name}: {totalMinutes} mins</h3>
        <LogTime skillDetail={props.skillDetail} logTime={props.logTime} />
      </div>
      <EditSkill skillDetail={props.skillDetail} editSkill={props.editSkill}/>
      <p>Description: {description}</p>
      <p>Notes: {notes}</p>
      <DeleteSkill skillDetail={props.skillDetail} deleteSkill={props.deleteSkill}/>
    </>
  )
}

export default SkillDetail;