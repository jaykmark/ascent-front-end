import React from 'react';

function Skill(props) {
  return (
    <div className="skill">
      <h4>{props.skillData.name}</h4>
      <p>TOTAL TIME: {props.skillData.totalMinutes} mins</p>
    </div>
  )
}

export default Skill;