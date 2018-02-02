import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import fuzzy from 'fuzzy';

import images from '../data/images';

import Home from './Home';
import NotFound from './NotFound';

class App extends Component {
  state = {
    images,
    hasResults: true,
  };

  handleSearch = (query) => {
    const results = fuzzy.filter(query, images);

    if (results.length === 0) {
      this.setState({ hasResults: false });
    } else {
      const matches = results.map(result => result.string);

      this.setState({
        images: matches,
        hasResults: true,
      });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="app__name"><span>Rage Kage</span>, a collection of animated gifs.</div>

          <Switch>
            <Route exact path="/" render={() => <Home hasResults={this.state.hasResults} images={this.state.images} handleSearch={this.handleSearch} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
