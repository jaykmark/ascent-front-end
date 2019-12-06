import React from 'react';

function SkillDetail(props) {
  const { name, description, notes, totalMinutes } = props.skillDetail;
  return (
    <>
      <div>
        <h3>{name}: {totalMinutes} mins</h3>
      </div>
      <p>Description: {description}</p>
      <p>Notes: {notes}</p>
    </>
  )
}

export default SkillDetail;