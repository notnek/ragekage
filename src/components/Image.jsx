import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

class Image extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
  };

  state = {
    copied: false,
  };

  onCopy = () => {
    this.setState({ copied: true });

    setTimeout(() => {
      this.setState({ copied: false });
    }, 1000);
  }

  render() {
    const { url } = this.props;

    return (
      <li>
        <a href={`${window.location}${url}`} target="_blank">{url}</a>
        <CopyToClipboard text={`${window.location}${url}`} onCopy={this.onCopy}>
          <span className="copy" title="Click to copy image URL">{ this.state.copied ? 'Copied' : 'Copy URL' }</span>
        </CopyToClipboard>
      </li>
    );
  }
}

export default Image;
