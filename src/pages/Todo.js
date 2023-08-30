import React, { useState, useEffect } from 'react';
import './Todo.css';

function TodoList() {
  const [todos, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Load items from localStorage when the component mounts
    useEffect(() => {
        const storedItems = localStorage.getItem('todo-items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    // Save items to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('todo-items', JSON.stringify(todos));
    }, [todos]);

    const addItem = () => {
        if (inputValue.trim()) {
            setItems([...todos, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleDelete = id => {
      const newItems = todos.filter((_, index) => index !== id);
      setItems(newItems);
    };

  return (
    <div className='todo-container'>
      <h1>My To-Do List</h1>
            <input type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add an item"
            />
            <button type="submit" onClick={addItem}>Add</button>
            <ul>
                {todos.map((item, index) => (
                    <li className="list-entry" key={index}>{item}
                    <button
              className="delete-button"
              onClick={() => handleDelete(index)}
            >X</button></li>
                ))}
            </ul>
        </div>
  );
}

export default TodoList;