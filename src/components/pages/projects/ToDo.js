import React, { useState, useEffect } from "react";
import "./ToDo.css";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    if (!input) {
      setErrorMessage("Please enter a to-do item!");
      return;
    }
    setTodos([...todos, { text: input, isCompleted: false }]);
    setInput("");
    setErrorMessage("");
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const checkTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="todo-body">
      <div className="todo-container">
        <form onSubmit={addTodo} className="form-todo">
          <input
            className="todo-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button className="todo-button" type="submit">
            Add To-Do
          </button>
        </form>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <ul className="todo-list-container">
          {todos.map((todo, index) => (
            <li key={index} className="todo-list">
              <span
                className={todo.isCompleted ? "completed" : ""}
                id="todo-span-text"
              >
                {todo.text}
              </span>
              {!todo.isCompleted && (
                <button
                  className="todo-button"
                  type="submit"
                  onClick={() => checkTodo(index)}
                >
                  Done
                </button>
              )}
              <button
                className="todo-button"
                type="submit"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
              {todo.isCompleted && (
                <span className="checkmark" style={{ color: "green" }}>
                  <i class="fa-solid fa-check"></i>
                </span>
              )}
            </li>
          ))}
        </ul>
        <button type="reset" onClick={clearTodos}>
          Clear To-Dos
        </button>
      </div>
    </div>
  );
}

export default ToDo;
