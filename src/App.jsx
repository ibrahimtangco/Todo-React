import React, { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="bg-gradient-to-tr from-violet-600 to-indigo-600 h-screen flex items-center justify-center p-8">
      <TodoList />
    </div>
  );
};

export default App;
