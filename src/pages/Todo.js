import React, { useState } from 'react';
import './Todo.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValue) return;
    const newTodo = { id: Date.now(), text: inputValue };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };
  
  const handleDelete = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new to-do item"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li className="list-entry" key={todo.id}>{todo.text}
          <button
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
            >X</button>
          </li>
        ))}
      </ul>
      </div>
  );
}

export default TodoList;