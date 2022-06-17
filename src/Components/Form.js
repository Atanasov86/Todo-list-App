import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import "../styles/form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const todoRef = collection(db, "todos");

  const createTodo = async () => {      
    await addDoc(todoRef, { name: name, completed: false, dueDate: dueDate });
    setName("");
    setDueDate("");
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const dueDateChangeHandler = (e) => {
    // let date = new Intl.DateTimeFormat('en-GB').format(new Date(e.target.value));    
    setDueDate(e.target.value);
  };

  return (
    <div className="form-container">
      <div className="form-input-container">
        <input
          className="input-add-todo"
          type="text"
          placeholder="Enter your task..."
          value={name}
          onChange={nameChangeHandler}
        />
        <input
          className="input-duedate-todo"
          type="date"                   
          value={dueDate}
          onChange={dueDateChangeHandler}
        />
        
      </div>
      <button className="btn-add-todo" type="button" onClick={createTodo}>
        <span>Add task</span>
      </button>
    </div>
  );
};

export default Form;
