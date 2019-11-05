import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home.js'
import ReviewPage from './components/ReviewPage.js'


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:reviewId" component={ReviewPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;