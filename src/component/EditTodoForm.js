import React, { useState } from 'react';

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const [priority, setPriority] = useState(task.priority); // Set initial priority

    const handleSubmit = (e) => {
      e.preventDefault();
      editTodo(value, task.id, priority); // Pass updated priority
    };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="todo-input"
      placeholder="Update task"
    />
    <select
      value={priority}
      onChange={(e) => setPriority(e.target.value)}
      className="todo-priority"
    >
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
    <button type="submit" className='todo-btn'>Update Task</button>
  </form>
  )
}