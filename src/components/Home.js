import React, { Component } from 'react';

import SearchForm from './SearchForm';
import List from './List';
import NoImagesFound from './NoImagesFound';

class Home extends Component {
  render() {
    return (
      <div className="app__content">
        <SearchForm handleSearch={this.props.handleSearch} />

        {
          this.props.hasResults
          ? <List images={this.props.images} />
          : <NoImagesFound />
        }
      </div>
    );
  }
}

export default Home;
