import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [priority, setPriority] = useState('Low'); 

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value, priority); 
        setValue("")
        setPriority('Low');
    }


  return (
    <div className='formdiv'>
      <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value={value} placeholder="What's the task today?" onChange={(e)=>{setValue(e.target.value)}}/>
      <select
          className='todo-priority'
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
        </select>
      <button className='todo-btn' type="submit">Add Task</button>
    </form>
    </div>
  )
}

export default TodoForm
