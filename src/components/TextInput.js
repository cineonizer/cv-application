import React, { Component } from 'react';
import '../css/Input.css';

class TextInput extends Component {
  render() {
    return (
      <div className="input-container">
        <input className="text-input" type="text" placeholder={this.props.title} required/>
        <span className="text-line"></span>
      </div>
    );
  }
}

export default TextInput;
