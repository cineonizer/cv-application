import React, { Component } from 'react';
import '../css/TextInput.css';

class TextInput extends Component {
  render() {
    const { name, handleInputChange } = this.props;

    return (
      <div className="input-container">
        <input
          className="text-input"
          type="text"
          placeholder={name}
          onChange={handleInputChange}
        />
        <span className="text-line"></span>
      </div>
    );
  }
}

export default TextInput;
