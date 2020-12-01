import React from "react";
import SignIn from "./Components/SignIn/SignIn";
import Form from "./Components/Form/Form";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
  <p><i class="fas fa-tractor"></i>{' '}Crop Scout{' '}<i class="fas fa-tractor"></i></p>
      </header>
     <Switch>
      <Route exact path="/" component={Form}></Route>  
      <Route path="/sign-in" component={SignIn}></Route>  
     </Switch>     
     
    </div>
    </Router>
  );
}

export default App;
