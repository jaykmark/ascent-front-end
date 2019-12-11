import React from 'react';
import Skill from './Skill/Skill';
import AddSkill from './AddSkill';
import './Skills.css'

class Skills extends React.Component {
  displaySkills(skills) {
    return skills.map(skill => {
      return (
        <Skill key={skill._id} skillDetail={skill} logTime={this.props.logTime}/>
      )
    })
  }

  render() {
    return(
      <div className="skillsList">
        <div className="skillsListHeader">
          <h3>SKILLS</h3>
          <AddSkill user={this.props.user} addSkill={this.props.addSkill} />
        </div>
        {this.props.skills && this.displaySkills(this.props.skills)}
      </div>
    )
  }
}

export default Skills;
