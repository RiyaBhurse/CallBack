import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
function App() {
  const [input, setInput] = React.useState("");
  const [count, setCount] = React.useState(0);
  const IncrementCount = useCallback(() => setCount(count + 1), [count]);
  return (
    <div className="App">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={IncrementCount}>
          Increment counter
        </button>
        <h3>Input text: {input}</h3>
        <h3>Count: {count}</h3>
        <hr />
        <ChildComponent count={count} onClick={IncrementCount} />
    </div>
  );
  
}
const ChildComponent = React.memo(function({count, onClick}){
  console.log("child component is Rendering");
  return(
    <div>
      <h2>This is a child componenet</h2>
      <button onClick={onClick}>Increment</button>
      <h4>Count:{count}</h4>
    </div>
  );
})
export default App;
