import React from 'react';

class EditGoal extends React.Component {
  state = {
    goal: this.props.goalDetail._id,
    duration: this.props.goalDetail.duration,
    frequency: this.props.goalDetail.frequency,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <>
        <div className="col">
            <button className="nav-item nav-link btn-primary btn-sm" type="button"
            id="register" data-toggle="modal" data-target={`#editGoal-${this.props.goalDetail._id}`}>Edit</button>
          </div>
          <div className="container">
            <div className="modal fade" id={`editGoal-${this.props.goalDetail._id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Goal for {this.props.goalDetail.skill.name}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                
                <div className="modal-body">
                  <form>
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
                    <button data-dismiss="modal" onClick={(event) => this.props.editGoal(event, this.state)} className="btn btn-primary float-right" type="submit">
                      Edit Goal
                    </button>
                    <button data-dismiss="modal" onClick={(event) => this.props.deleteGoal(event, this.props.goalDetail._id)} className="btn btn-primary float-right" type="submit">Remove Goal</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default EditGoal;