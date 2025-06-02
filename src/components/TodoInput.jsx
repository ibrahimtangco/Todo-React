import React from "react";

function TodoInput({ newTodo, onChange }) {
  return (
    <input
      type="text"
      name="todo"
      value={newTodo}
      onChange={onChange}
      placeholder="Add todo..."
      className="focus:outline-none"
    />
  );
}

export default TodoInput;
