import React from 'react';

const DeleteSkill = props => {
  return (
    <>
    <button 
      type="button"
      className="btn btn-success btn-sm post-delete-button float-right justify-content-end"
      data-toggle="modal"
      data-target="#deletePostModal">
          DELETE SKILL
    </button>
    <div
    className="modal fade"
    id="deletePostModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="deletePostModalLabel"
    aria-hidden="true"
    >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="deletePostModalLabel">
          Are you sure you want to delete "{props.skill.name}"?
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {/* {props.postData && (
            <ConfirmDelete
              deletePost={props.deletePost}
              postData={props.postData}
            />
          )} */}
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default DeleteSkill;