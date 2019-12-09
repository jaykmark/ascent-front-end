import React from 'react';
import LogTime from '../LogTime/LogTime';
import EditSkill from './EditSkill/EditSkill';
import DeleteSkill from './DeleteSkill/DeleteSkill';
import './SkillDetail.css';

class SkillDetail extends React.Component {
  displayLogTimes = (logTimes) => {
    return (
      logTimes.map(logTime => {
        return (
          <div key={logTime._id} logTimeDetail={logTime}>{logTime.minutes} mins on {logTime.date}</div>
        )
      })
    )
  }

  render() {
    const { name, description, notes, totalMinutes } = this.props.skillDetail;
    return (
      <>
        <div className="skillDetailPage">
          <h3>{name}</h3>
          <div className="skillDetailTotalMinutes">
            {totalMinutes} mins
            <LogTime skillDetail={this.props.skillDetail} logTime={this.props.logTime} />
          </div>
        <EditSkill skillDetail={this.props.skillDetail} editSkill={this.props.editSkill}/>
        <p>Description: {description}</p>
        <p>Notes: {notes}</p>
        <div className="skillChart">
          {this.props.skillDetail.logTimes && this.displayLogTimes(this.props.skillDetail.logTimes)}
        </div>
        <DeleteSkill skillDetail={this.props.skillDetail} deleteSkill={this.props.deleteSkill}/>
        </div>
      </>
    )
  }
}



export default SkillDetail;