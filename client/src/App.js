import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Register from "./components/auth/Register";
import Login from './components/auth/Login';
import Dashboard from './components/layouts/Dashboard';

class App extends Component {
  render() {
    return (
      
      <Router>
   hiiiiii
   
    <Switch>
      <Route  path="/dashboard" component = {Dashboard}></Route>
      <Route  path ="/register" component= { Register }></Route>
      <Route  path ="/login" component= { Login }></Route>
    </Switch>
    
    </Router>
   
  );
}
}

export default App;
