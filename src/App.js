import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Table from './Table';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/hi">
            <div>a</div>
          </Route>
          <Route path="/">
            <Table />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
