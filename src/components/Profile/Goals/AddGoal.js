import React from 'react';

class AddGoal extends React.Component {
  state = {

  };

  render() {
    return (
      <>
        <div className="col">
            <button className="nav-item nav-link btn-primary btn-sm" type="button"
            id="register" data-toggle="modal" data-target="#addGoal">Add Goal</button>
          </div>
          <div className="container">
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
                    <button data-dismiss="modal" onClick={(event) => this.props.handleSubmit(event, this.state)} className="btn btn-primary float-right" type="submit">
                      Add Goal
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

export default AddGoal;