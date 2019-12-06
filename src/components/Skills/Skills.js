import React from 'react';
import Skill from './Skill/Skill';
import AddSkill from './AddSkill';

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
        <AddSkill user={this.props.user} handleSubmit={this.props.addSkill} />
        {this.props.skills && this.displaySkills(this.props.skills)}
      </div>
    )
  }
}

export default Skills;
