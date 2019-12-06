import React from 'react';
import axios from 'axios';
import SkillDetail from '../components/SkillDetail/SkillDetail';

class SkillDetailContainer extends React.Component {
  state = {
    skillDetail: ''
  };

  componentDidMount(){
    const skillId = this.props.location.pathname.split('/')[2]
    axios.get(`${process.env.REACT_APP_API_URL}/skills/${skillId}`)
      .then(res => {
        this.setState({
          skillDetail: res.data.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <SkillDetail skillDetail={this.state.skillDetail} />
      </>
    )
  }
}

export default SkillDetailContainer;