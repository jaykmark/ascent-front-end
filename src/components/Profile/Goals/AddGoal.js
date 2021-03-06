import React from 'react';

class AddGoal extends React.Component {
  state = {
    // How to grab only the default
    skill: '',
    duration: '',
    frequency: 'Daily',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <>
          <button className="btn btn-primary btn-sm btn-addGoal" type="button"
          id="btn-addGoal" data-toggle="modal" data-target="#addGoal"><p>+</p></button>
            <div className="modal fade" id="addGoal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Goal</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="selectedSkill">Skill</label>
                      <select className="form-control" id="selectedSkill" name="skill" onChange={this.handleChange} value={this.state.skill}>
                        <option></option>
                        {this.props.skills.map(skill => {
                            return !skill.goals ?  <option value={skill._id} key={skill._id}>{skill.name}</option> : null
                            })}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="duration">Duration (min)</label>
                      <input
                        onChange={this.handleChange}
                        className="form-control form-control-lg"
                        type="number"
                        id="duration"
                        name="duration"
                        value={this.state.duration}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="goalFrequency">Frequency</label>
                      <select name="frequency" value={this.state.frequency} className="form-control" id="goalFrequency" onChange={this.handleChange}>
                        <option>Daily</option>
                        <option>Weekly</option>
                      </select>
                    </div>
                    <button data-dismiss="modal" onClick={
                      (event) => {this.props.addGoal(event, this.state)
                      this.setState({
                        skill: '',
                        duration: '',
                      })}
                      } className="btn btn-primary float-right" type="submit">
                      Add Goal
                    </button>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </>
    )
  }
}

export default AddGoal;