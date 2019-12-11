import React from 'react';

function ConfirmDeleteSkill(props) {
  return (
    <div className="container">
      <form>
        <button data-dismiss="modal" onClick={(event) => props.deleteSkill(event, props.skillDetail._id)} type="submit" className="btn btn-danger float-right">Yes</button>
        <button 
          type="button" 
          className="btn btn-primary float-left"                
          data-dismiss="modal"
          aria-label="Close">No</button>
      </form>
    </div>
  )
};

export default ConfirmDeleteSkill;