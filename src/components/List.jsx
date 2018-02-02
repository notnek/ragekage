import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

const List = ({ images }) => (
  <ul className="app__content__list">
    {images.map(url => <Image key={url} url={url} />)}
  </ul>
);

export default List;

List.propTypes = {
  images: PropTypes.array.isRequired,
};
