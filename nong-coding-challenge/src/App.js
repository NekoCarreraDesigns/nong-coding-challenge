import React from "react";
import Form from "./Components/Form/Form.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  <p><i class="fas fa-tractor"></i>{' '}Crop Scout{' '}<i class="fas fa-tractor"></i></p>
      </header>
      <Form/>
    </div>
  );
}

export default App;
