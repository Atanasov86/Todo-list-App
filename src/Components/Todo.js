import React, { useState } from "react";
import { db } from "../firebase-config";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import Modal from "../Components/Modal";

import "../styles/todo.css";

const Todo = ({id, name, completed, dueDate}) => {
  const [newName, setNewName] = useState(name);
  const [isCompleted, setIsCompleted] = useState(completed);
  const [newDueDate, setNewDueDate] = useState(dueDate);
  const [showModal, setShowModal] = useState(false);

  const updateTodo = async (id, newName, isCompleted, newDueDate) => {
    const todoDoc = doc(db, "todos", id);
    const editedName = {
      name: newName,
      completed: isCompleted,
      dueDate: newDueDate,
    };
    await updateDoc(todoDoc, editedName);
  };

  const deleteTodo = async (id) => {
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc);
  };

  const toggleChangeHandler = (e) => {
    setIsCompleted(e.target.checked);
  };

  const nameChangeHandler = (e) => {
    setNewName(e.target.value);
  };

  const dueDateChangeHandler = (e) => {
    setNewDueDate(e.target.value);
  };

  return (
    <div className="todo-wrapper">
      <Modal
        onClose={() => setShowModal(false)}
        showModal={showModal}
        name={name}
        dueDate={dueDate}
      />
      <input
        className="todo-checkbox"
        id={id}
        type="checkbox"
        value={isCompleted}
        onChange={toggleChangeHandler}
      />
      <div className="todo-input-container" onClick={() => setShowModal(true)}>
        <div
          className="edit-todo-input"
          style={
            isCompleted
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {name}
        </div>
        <div className="due-date-input">{dueDate}</div>
      </div>
      <div className="todo-btn-group">        
        <button
          className="btn-delete"
          type="button"
          onClick={() => deleteTodo(id)}
        ></button>
      </div>
    </div>
  );
};

export default Todo;
