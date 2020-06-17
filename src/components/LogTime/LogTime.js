import React from 'react';
import './LogTime.css';

// Get current date and set 
const now = new Date();
const year = now.getFullYear().toString();
let month = parseInt(now.getMonth() + 1).toString();
let date = now.getDate().toString();

// Add leading zeroes to single digits
if (month.length === 1) {
  month = `0${month}`;
}

if (date.length === 1) {
  date = `0${date}`;
}

const nowFormattedDate = `${year}-${month}-${date}`;

class LogTime extends React.Component {
  state = {
    skill: this.props.skillDetail._id,
    minutes: '',
    date: nowFormattedDate,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  render() {
    return (
      <>
        {/* MODAL BUTTON */}
        <button className="btn-primary btn-sm btn btn-logTime" type="button"
          id="btn-logTime" data-toggle="modal" data-target={`#addLogTime-${this.props.skillDetail._id}`}>LOG TIME</button>

        {/* MODAL BODY */}
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