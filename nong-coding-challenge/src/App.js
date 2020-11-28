import React from "react";
import SignIn from "./Components/SignIn/SignIn";
// import Form from "./Components/Form/Form";
// import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  <p><i class="fas fa-tractor"></i>{' '}Crop Scout{' '}<i class="fas fa-tractor"></i></p>
      </header>
     <SignIn/>
    </div>
  );
}

export default App;
