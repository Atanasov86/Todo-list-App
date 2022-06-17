import "./App.css";
import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import { FILTER_MAP, FILTER_NAMES, DATA } from "./Components/Constants";
import { IoMdSunny } from "react-icons/io";
import { MdNightlight } from "react-icons/md";
import Form from "./Components/Form";
import Todo from "./Components/Todo";
import FilterButton from "./Components/FilterButton";

const App = () => {
  const [todos, setTodos] = useState(DATA);
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const todosRef = collection(db, "todos");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // useEffect(() => {
  //   const getTodos = async () => {
  //     const data = await getDocs(todosRef);
  //     setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getTodos();
  // }, [todos, todosRef]);

  const filterListButtons = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const todosList = todos
    .filter(FILTER_MAP[filter])
    .map((todo) => (
      <Todo
        id={todo.id}
        name={todo.name}
        completed={todo.completed}
        dueDate={todo.dueDate}
        showModal={todo.showModal}
        key={todo.id}
      />
    ));

  return (
    <div className="app" data-theme={theme}>
      <div className="Wrapper">
        <div className="header">
          <span className="app-name">Todo List App</span>
          <span>Theme:</span>
          <button className="theme-icon" onClick={switchTheme}>          
            {theme === "light" ? <IoMdSunny /> : <MdNightlight />}
          </button>
        </div>
        <h2>What need to be done...</h2>
        <Form />
        <div className="filter-btn-group">{filterListButtons}</div>
        <h2>{todosList.length} tasks remaning</h2>
        <div className="todo-container">{todosList}</div>
      </div>
    </div>
  );
};

export default App;
