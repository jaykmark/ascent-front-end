import React from 'react';

class EditSkill extends React.Component {
  state = {
    skill: this.props.skillDetail._id,
    name: this.props.skillDetail.name,
    totalMinutes: this.props.skillDetail.totalMinutes,
    description: this.props.skillDetail.description,
    notes: this.props.skillDetail.notes,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  render() {
    return (
      <>
        {/* EditSkill Button */}
        <button className="btn btn-success btn-sm float-right" type="button"
        id="register" data-toggle="modal" data-target="#editSkill">Edit Skill</button>

        {/* EditSkill Modal */}
        <div className="container">
          <div className="modal fade" id="editSkill" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Skill</h5>
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
                      minLength="1"
                      maxLength="10"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      onChange={this.handleChange}
                      className="form-control form-control-lg"
                      type="text"
                      id="description"
                      name="description"
                      value={this.state.description}
                      minLength="1"
                      maxLength="200"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <textarea
                      onChange={this.handleChange}
                      className="form-control form-control-lg"
                      type="text"
                      id="notes"
                      name="notes"
                      value={this.state.notes}
                      minLength="1"
                      maxLength="200"
                    ></textarea>
                  </div>
                  <button data-dismiss="modal" onClick={(event) => this.props.editSkill(event, this.state)} className="btn btn-primary float-right" type="submit">
                    Edit Skill
                  </button>
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

export default EditSkill;