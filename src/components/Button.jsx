import React from "react";
import AddIcon from "../assets/add.png";

function Button({ text, type = "button", onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 md:hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 md:px-5 md:py-2.5 text-center me-2 mb-2 cursor-pointer"
    >
      <span className="hidden md:block">{text}</span>
      <span className="block md:hidden">
        <img className="h-5 w-5" src={AddIcon} alt="Add icon" />
      </span>
    </button>
  );
}

export default Button;
