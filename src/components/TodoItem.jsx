import React, { useState } from "react";
import Close from "../assets/close.png";
function TodoItem({ todo, onComplete, onDelete }) {
  return (
    <li
      onClick={() => !todo.completed && onComplete(todo.id)}
      className={`flex items-center justify-between gap-4 border-b border-gray-300 py-2 px-4 hover:bg-violet-200 transition-colors duration-300 ease-in-out rounded-lg ${
        todo.completed ? "line-through text-gray-500" : "text-gray-800 "
      }`}
    >
      <span className="w-full">{todo.task}</span>
      <img
        onClick={() => onDelete(todo.id)}
        src={Close}
        alt="delete button"
        className="w-2.5 h-2.5 cursor-pointer"
      />
    </li>
  );
}

export default TodoItem;
