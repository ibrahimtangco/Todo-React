import React from "react";

function Footer({ todos, completed }) {
  return (
    <div
      className="px-8 flex flex-col items-center md:flex-row border-t border-gray-300
  bg-gradient-to-tr from-violet-600 to-indigo-600 text-white py-2 
  md:bg-white md:from-white md:to-white md:text-black md:py-4"
    >
      <span className="w-full">Total ToDos: {todos.length}</span>
      <span className="w-full">Completed ToDos: {completed}</span>
    </div>
  );
}

export default Footer;
