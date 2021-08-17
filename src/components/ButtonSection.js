import React, { Component } from 'react';
import Button from './Button';
import '../css/Resume.css';

class ButtonSection extends Component {
  render() {
    const { handleLoadButtonClick, handleResetButtonClick } = this.props;

    return (
      <div className="buttons">
        <Button name="Load" sign="Sample" loadSample={() => handleLoadButtonClick()} />
        <Button name="Reset" sign="Resume" resetInputs={() => handleResetButtonClick()} />
      </div>
    );
  }
}

export default ButtonSection;