import React, { Component } from 'react';
import '../css/TextArea.css';

class TextArea extends Component {
  render() {
    const { name, handleInputChange } = this.props;

    return (
      <div className="textarea-container">
        <textarea
          className="textarea"
          placeholder={name}
          onChange={handleInputChange}
        />
        <span className="textarea-line"></span>
      </div>
    );
  }
}

export default TextArea;
