import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  onChange = (e) => {
    const query = e.target.value;

    this.setState({ query }, this.performSearch);
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
