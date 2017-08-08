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
      <li>
        <a href={`${window.location}${this.props.url}`} target="_blank">{this.props.url}</a> 
        <CopyToClipboard text={`${window.location}${this.props.url}`} onCopy={this.onCopy}>
          <span className="copy" title="Click to copy image URL">{ this.state.copied ? "Copied" : "Copy URL" }</span>
        </CopyToClipboard>
      </li>
    );
  }
}

export default Image;
