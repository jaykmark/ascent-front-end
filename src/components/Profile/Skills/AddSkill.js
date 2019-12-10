import React from 'react';
import './Skills.css';

class AddSkill extends React.Component {
  state = {
    user: this.props.user._id,
    name: '',
    totalMinutes: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render () {
    return (
      <>
        <button className="btn-primary btn-sm btn-addSkill" type="button"
        id="register" data-toggle="modal" data-target="#addSkill"><p>+</p></button>
        
          <div className="modal fade" id="addSkill" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Skill</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
              </div>
              
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      onChange={this.handleChange}
                      className="form-control form-control-lg"
                      type="text"
                      id="name"
                      name="name"
                      value={this.state.name}
                      required
                      minLength="1"
                      maxLength="200"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="totalMinutes">Total Minutes</label>
                    <input
                      onChange={this.handleChange}
                      className="form-control form-control-lg"
                      type="number"
                      id="totalMinutes"
                      name="totalMinutes"
                      value={this.state.totalMinutes}
                      required
                    />
                  </div>
                  <button data-dismiss="modal" onClick={(event) => {
                    this.props.addSkill(event, this.state)
                    this.setState({
                      name: '',
                      totalMinutes: '',
                    })}} className="btn btn-primary btn-sm float-right" type="submit">
                    Add Skill
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

export default AddSkill;