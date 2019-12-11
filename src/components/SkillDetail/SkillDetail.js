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
    const { name, description, notes } = this.props.skillDetail;
    const totalHours = Math.floor(this.props.skillDetail.totalMinutes / 60);
    const minutes = this.props.skillDetail.totalMinutes - (totalHours * 60);
    return (
      <>
        <div className="container">
          <div className="skillDetailPage">
            <div className="skillDetailHeader">
              <h3>{name}</h3>
              <div className="card card-skill-detail">
                <div className="card-body card-body-skill">
                    <h5 className="card-title card-title-skill">{totalHours} hours {minutes > 0 ? `${minutes} mins` : null}</h5>
                    <LogTime skillDetail={this.props.skillDetail} logTime={this.props.logTime} />
                </div>
              </div>
              {/* <div className="skillDetailTotalMinutes">
                {totalHours} hours {minutes} mins
                <LogTime skillDetail={this.props.skillDetail} logTime={this.props.logTime} />
              </div> */}
            </div>
            <EditSkill skillDetail={this.props.skillDetail} editSkill={this.props.editSkill} />
            <p className="skillDetailDescription"><strong>Description:</strong> {description}</p>
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