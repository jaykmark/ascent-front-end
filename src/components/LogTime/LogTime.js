import React from 'react';

class LogTime extends React.Component {
  state = {
    skill: this.props.skillDetail._id,
    minutes: '',
    date: Date.now,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render () {
    return (
      <>
      <div className="col">
          <button className="nav-item nav-link btn-primary btn-sm" type="button"
          id="register" data-toggle="modal" data-target={`#addLogTime-${this.props.skillDetail._id}`}>Log Time</button>
        </div>
          <div className="modal fade" id={`addLogTime-${this.props.skillDetail._id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Log Time for {this.props.skillDetail.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
              </div>
              
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="minutes">Minutes</label>
                    <input
                      onChange={this.handleChange}
                      className="form-control form-control-lg"
                      type="number"
                      id="minutes"
                      name="minutes"
                      value={this.state.minutes}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                      onChange={this.handleChange}
                      className="form-control form-control-lg"
                      type="date"
                      id="date"
                      name="date"
                      value={this.state.date}
                      required
                    />
                  </div>
                  <button data-dismiss="modal" onClick={(event) => this.props.logTime(event, this.state)} className="btn btn-primary float-right" type="submit">
                    Log Time
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

export default LogTime;