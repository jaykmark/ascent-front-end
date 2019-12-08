import React from 'react';

class AddGoal extends React.Component {
  state = {
    skill: this.props.skills[0]._id,
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
        <div className="col">
          <button className="nav-item nav-link btn-primary btn-sm" type="button"
          id="register" data-toggle="modal" data-target="#addGoal">Add Goal</button>
        </div>
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
                        {this.props.skills.map(skill => {
                          return <option value={skill._id} key={skill._id}>{skill.name}</option>
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
                        <option>Monthly</option>
                      </select>
                    </div>
                    <button data-dismiss="modal" onClick={(event) => this.props.addGoal(event, this.state)} className="btn btn-primary float-right" type="submit">
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