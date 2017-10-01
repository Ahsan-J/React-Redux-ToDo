import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Main from './LogIn/index.js';
import ToDo from './ToDo/index.js';

const MainIndex = (history)=>{
  return (<Main {...history} />);
}
const ToDoIndex = (history)=>{
  return (<ToDo {...history}/>);
}

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" render={MainIndex}/>
            <Route path="/:name" render={ToDoIndex}/> 
          </Switch>
        </Router>
    );
  }
}

export default (App);
