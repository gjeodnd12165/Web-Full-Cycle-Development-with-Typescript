import React, { CSSProperties } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';


function App() {

  return (
    <div className="container">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
