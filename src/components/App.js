import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga';
import fuzzy from 'fuzzy';

import images from '../data/images';

import Home from './Home';
import About from './About';
import NotFound from './NotFound';

ReactGA.initialize('UA-20333926-13');

class App extends Component {
  constructor() {
    super();

    this.state = {
      images: images,
      hasResults: true
    }
  }

  handleSearch = (query) => {
    let results = fuzzy.filter(query, images);

    if (results === 0) {
      this.setState({ hasResults: false });
      return
    }

    let matches = results.map(result => result.string);

    this.setState({
      images: matches,
      hasResults: true
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="app__name"><span>Rage Kage</span> A collection of animated gifs.</div>

          <Switch>
            <Route exact path="/" render={() => <Home hasResults={this.state.hasResults} images={this.state.images} handleSearch={this.handleSearch} />} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>

          <div className="app__footer">Made by <a href="https://kenton.glass">Kenton</a></div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
