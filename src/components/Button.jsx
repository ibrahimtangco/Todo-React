import React from "react";

function Button({ text, type = "button", onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
    >
      {text}
    </button>
  );
}

export default Button;
