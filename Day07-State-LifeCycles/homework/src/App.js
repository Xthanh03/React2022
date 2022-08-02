import React from 'react';
import './App.css';
import Toggle from "./components/Toggle";
import Child from "./components/Child";
function App() {
  return (
    <div className="App">
      <Toggle title="Show Child">
        <Child />
      </Toggle>

    </div>
  );
}

export default App; 