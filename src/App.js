import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/Nav/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import News from './components/News/News';
import Meeting from './components/Meeting/Meeting';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about-me" component={ AboutMe } />
          <Route exact path="/api-example" component={ News } />
          <Route exact path="/meeting-example" component={ Meeting } />
        </Switch>
      </Router>
    )
  }
}

export default App;
