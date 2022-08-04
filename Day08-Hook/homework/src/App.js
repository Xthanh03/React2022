import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [timer, setTimer] = useState(0)
  const countRef = useState("count");


  const handleStart = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }



  return (
    <div className="app">
      <h3>React Stopwatch</h3>
      <div className='stopwatch-card'>
        <p>{timer}</p> {/* here we will show timer */}
        <div className='buttons'>
          <button onClick={handleStart}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default App;

