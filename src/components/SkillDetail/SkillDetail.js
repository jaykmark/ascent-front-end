import React from 'react';
import LogTime from '../LogTime/LogTime';
import EditSkill from './EditSkill/EditSkill';
import DeleteSkill from './DeleteSkill/DeleteSkill';
import SkillChart from './SkillChart/SkillChart';
import './SkillDetail.css';

class SkillDetail extends React.Component {
  displayLogTimes = (logTimes) => {
    return (
      logTimes.map(logTime => {
        return (
          <div key={logTime._id}>{logTime.minutes} mins on {logTime.date}</div>
        );
      })
    )
  };

  render() {
    const { name, description, notes, totalMinutes } = this.props.skillDetail;
    return (
      <>
        <div className="container">
          <div className="skillDetailPage">
            <div className="skillDetailHeader">
              <h3>{ name }</h3>
              <div className="skillDetailTotalMinutes">
                { totalMinutes } mins
                <LogTime skillDetail={this.props.skillDetail} logTime={this.props.logTime} />
              </div>
            </div>
          <EditSkill skillDetail={this.props.skillDetail} editSkill={this.props.editSkill} />
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Notes:</strong> {notes}</p>
          <SkillChart skillDetail={this.props.skillDetail} displayLogTimes={this.displayLogTimes} />
          <DeleteSkill skillDetail={this.props.skillDetail} deleteSkill={this.props.deleteSkill} />
          </div>
        </div>
      </>
    )
  }
}



export default SkillDetail;