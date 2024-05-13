import React, { CSSProperties } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import Weather from './Weather';


function App() {

  return (
    <div className="container">
      <TodoList></TodoList>
      <Weather
        weather="맑음"
      >일기 예보</Weather>
    </div>
  );
}

export default App;
