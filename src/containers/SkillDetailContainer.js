import React from 'react';
import axios from 'axios';
import SkillDetail from '../components/SkillDetail/SkillDetail';
import loadingGif from '../assets/images/loading.gif';

class SkillDetailContainer extends React.Component {
  state = {
    loading: true,
    skillDetail: '',
  };

  componentDidMount() {
    const skillId = this.props.location.pathname.split('/')[2]
    axios.get(`${process.env.REACT_APP_API_URL}/skills/${skillId}`)
      .then(res => {
        this.setState({
          skillDetail: res.data.data,
          loading: false,
        })
      })
      .catch(err => console.log(err))
  }

  logTime = (event, logTime) => {
    event.preventDefault();
    // API POST Request - Create a LogTime and add to minutes Skill's Model
    axios.post(`${process.env.REACT_APP_API_URL}/logtimes`, logTime)
      .then(res => {
        this.setState({
          skillDetail: res.data.data,
        })
      })
      .catch(err => console.log(err))
  };

  editSkill = (event, editedSkill) => {
    const skillId = editedSkill.skill;
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/skills/${skillId}`, editedSkill)
      .then(res => {
        this.setState({
          skillDetail: res.data.data,
        })
      })
      .catch(err => console.log(err));
  };

  deleteSkill = (event, deletedSkill) => {
    event.preventDefault();
    axios.delete(`${process.env.REACT_APP_API_URL}/skills/${deletedSkill}`)
      .then(this.props.history.push('/profile'))
      .catch(err => console.log(err))
  };

  render() {
    return (
      <>
        {this.state.loading && (
          <div className="loadingContainer">
            <img src={loadingGif} alt="loading" />
          </div>
        )}
        {this.state.skillDetail && <SkillDetail skillDetail={this.state.skillDetail} logTime={this.logTime} editSkill={this.editSkill} deleteSkill={this.deleteSkill} />}
      </>
    )
  }
}

export default SkillDetailContainer;