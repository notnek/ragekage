import React, { Component } from 'react';

import Image from './Image';

class List extends Component {
  render() {
    return (
      <ul className="app__content__image-list">
        {this.props.images.map((url, index) => <Image key={index} url={url} />)}
      </ul>
    );
  }
}

export default List;
