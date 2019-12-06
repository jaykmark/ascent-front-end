import React from 'react';
import Skill from './Skill/Skill';

class Skills extends React.Component {
  displaySkills(skills) {
    return skills.map(skill => {
      return (
        <Skill key={skill._id} skillData={skill} />
      )
    })
  }

  render() {
    return(
      <div className="skills-list">
        <h3>HERE YO SKILLS</h3>
        {this.props.user.skills && this.displaySkills(this.props.user.skills)}
      </div>
    )
  }
}

export default Skills;
