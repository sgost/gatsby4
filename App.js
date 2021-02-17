import React from "react";
import './App.css';
import User from "./User"
function App() {
  function getData(){
    alert("Hello from app component")
  }
  
  return (
    <div className="App">
    <User data={getData}/>
    </div>
  );
}

export default App;
