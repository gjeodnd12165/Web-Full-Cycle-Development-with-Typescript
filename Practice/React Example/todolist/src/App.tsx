import React, { CSSProperties } from 'react';
import logo from './logo.svg';
import './App.css';

{/*
  작성자: 
  작성일: 
  내용: 
*/}

function App() {
  const name: string = "리액트" as const;

  return (
    <div className="container">
      <h1 className="test">Hello, {
        name === "리액트" ? (<h1>YES</h1>) : null
      }</h1>
      <p>반갑습니다</p>
    </div>
  );
}

export default App;
