import React from "react";

import "../styles/modal.css";

const Modal = ({onClose, showModal, name, dueDate, isCompleted}) => {
  return (
    <div className={`modal ${showModal ? 'showModal': ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">Edit Todo</span>
          <button className="modal-close" onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          <div>
            <label htmlFor="edit-todo-name">What need to be done?</label>
            <input className="edit-todo-name" type="text" value={name} />
          </div>
          <div>
            <input className="edit-todo-checkbox" type="checkbox" />
            <label htmlFor="edit-todo-checkbox">Task finished?</label>
          </div>
          <div>
            <label htmlFor="edit-todo-duedate">Due Date</label>
            <input
              className="edit-todo-duedate"
              type="date"
              value={dueDate}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-save">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
