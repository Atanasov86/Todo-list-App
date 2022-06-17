import React from "react";
import "../styles/filter-button.css";

const FilterButton = (props) => {
  return (
    <button
      type="button"
      className="btn-filter-todo"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span>{props.name}</span>
    </button>
  );
};

export default FilterButton;