import React from 'react';
import './index.css'

const Header = ({openInput}) => {
  return (
    <div>
      <div className="header">
        <h1>Todo List</h1>
        <p onClick={ () => openInput() }>&#43;</p>
      </div>
    </div>
  );
}

export default Header;
