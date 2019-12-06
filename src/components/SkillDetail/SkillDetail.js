import React from 'react';
import EditSkill from './EditSkill/EditSkill';

function SkillDetail(props) {
  const { name, description, notes, totalMinutes } = props.skillDetail;
  return (
    <>
      <div>
        <h3>{name}: {totalMinutes} mins</h3>
      </div>
      <EditSkill skillDetail={props.skillDetail} editSkill={props.editSkill}/>
      <p>Description: {description}</p>
      <p>Notes: {notes}</p>
    </>
  )
}

export default SkillDetail;