import React from 'react';
import './index.css'

const TodoItem = (props) => {
  const {data} = props

  return (
    <li className="todo-item">
      <div className="check-box">
        <input checked={data.completed} type="checkbox" name="checkbox" id="checkbox"/>
        <label htmlFor="checkbox" className="content" style={{textDecoration: data.completed ? 'line-through' : 'none' }}>
        {data.content}
      </label>
      </div>
      <div className="btn-group">
        <button className="check">check</button>
        <button className="edit">edit</button>
        <button className="delete">delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
