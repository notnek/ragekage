import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super();

    this.state = {
      query: 'hey',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
  }
  
  onChange = (e) => {
    let query = e.target.value;

    this.setState({ query: query }, this.performSearch);
  }

  performSearch = () => {
    this.props.handleSearch(this.state.query);
  }

  render() {
    return (
      <form className="app__search-form" onSubmit={this.onSubmit}>
        <input type="search" onChange={this.onChange} placeholder="Type to find a gif..." />
      </form>
    );
  }
}

export default SearchForm;
