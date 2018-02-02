import React from 'react';
import PropTypes from 'prop-types';

import SearchForm from './SearchForm';
import List from './List';
import NoImagesFound from './NoImagesFound';

const Home = ({ handleSearch, hasResults, images }) => (
  <div className="app__content">
    <SearchForm handleSearch={handleSearch} />

    {
      hasResults
      ? <List images={images} />
      : <NoImagesFound />
    }
  </div>
);

export default Home;

Home.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  hasResults: PropTypes.bool.isRequired,
  images: PropTypes.array,
};

Home.defaultProps = {
  images: [],
};
