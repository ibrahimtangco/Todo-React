import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import Button from "./Button";
import Footer from "./Footer";

function TodoList() {
  const todosJSON = localStorage.getItem("todos");

  const [todos, setTodos] = useState(JSON.parse(todosJSON) || []);
  const [completed, setCompleted] = useState(
    todos.filter((todo) => todo.completed).length
  );
  const [newTodo, setNewTodo] = useState("");

  const handleCompleteAction = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteAction = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleInputChange = (e) => {
    let val = e.target.value.trimStart();
    setNewTodo(val);
  };

  const handleAddTodo = () => {
    const fullNewTodo = {
      id: Date.now(),
      task: newTodo,
      completed: false,
    };

    setTodos([...todos, fullNewTodo]);
    setNewTodo("");
  };
  useEffect(() => {
    setCompleted(todos.filter((todo) => todo.completed).length);
    const todoListToJSON = JSON.stringify(todos);

    localStorage.setItem("todos", todoListToJSON);
    // localStorage.removeItem("todos");
  }, [todos]);
  return (
    <div className="bg-white min-h-screen min-w-screen flex flex-col justify-between md:w-full md:min-w-80 md:min-h-1/3 md:max-h-fit md:max-w-lg md:rounded-xl overflow-hidden">
      <div className="p-4">
        <h1 className="text-xl font-semibold bg-gradient-to-tr from-violet-600 to-indigo-600 bg-clip-text text-transparent text-center">
          ToDo App - React JS
        </h1>
        <hr className="border-gray-300 my-6" />
        {/* todo input */}
        <div className="shadow p-2 rounded-lg flex items-center justify-between mb-8">
          <TodoInput newTodo={newTodo} onChange={handleInputChange} />{" "}
          <Button text="Add" onClick={handleAddTodo} />
        </div>
        {todos.length !== 0 ? (
          <ul className="space-y-4">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onComplete={handleCompleteAction}
                onDelete={handleDeleteAction}
              />
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-400">No ToDos found.</p>
        )}
      </div>
      <Footer todos={todos} completed={completed} />
    </div>
  );
}

export default TodoList;
