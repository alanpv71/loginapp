import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/layouts/Header";
import Register from "./components/auth/Register";
import Login from './components/auth/Login';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route exact path ="/register" component= { Register }></Route>
        <Route exact path ="/login" component= { Login }></Route>
      </Switch>
      </Router>
    </div>
  );
}
}
export default App;
