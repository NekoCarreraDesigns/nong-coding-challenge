import React from "react";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/Signup/Signup"
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
      <Route exact path="/" component={SignIn}></Route>  
      <Route path="/sign-up" component={SignUp}></Route>  
      <Route path="/form" component={Form}></Route>  
     </Switch>     
     
    </div>
    </Router>
  );
}

export default App;
