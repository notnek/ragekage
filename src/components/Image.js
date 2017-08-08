import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

class Image extends Component {
  constructor() {
    super();

    this.state = {
      copied: false
    };
  }

  onCopy = () => {
    this.setState({ copied: true });

    setTimeout(function(){
      this.setState({ copied: false });
    }.bind(this), 1000);
  }

  render() {
    return (
      <li style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${this.props.url})`}}>
        <CopyToClipboard text={`${process.env.PUBLIC_URL}/${this.props.url}`} onCopy={this.onCopy}>
          <span><span>{ this.state.copied ? "Copied!" : "Copy Image URL" }</span></span>
        </CopyToClipboard>
      </li>
    );
  }
}

export default Image;
