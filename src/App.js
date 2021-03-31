import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Secured from './Secured';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <ul>
            <li><Link to="/">public component</Link></li>
            <li><Link to="/Secured">secured component</Link></li>
          </ul>
          <Route exact path="/" component={Welcome} />
          <Route path="/Secured" component={Secured} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;