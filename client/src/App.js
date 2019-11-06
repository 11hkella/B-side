import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './components/Home.js'
import ReviewPage from './components/ReviewPage.js'
import ReviewForm from './components/ReviewForm.js'


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/review'>Write a Review</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/review" component={ReviewForm} />
          <Route exact path="/:reviewId" component={ReviewPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
