import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga';

import Home from './Home';
import About from './About';
import NotFound from './NotFound';

ReactGA.initialize('UA-20333926-13');

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
