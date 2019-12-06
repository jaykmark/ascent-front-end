import React from 'react';
import AddGoal from './AddGoal';
import './Goals.css'

class Goals extends React.Component {
  render() {
    return (
      <>
        <h3>HERE YO GOALS</h3>
        <div className="goalsList">
          <AddGoal />
          
        </div>
      </>
    )
  }
}

export default Goals;