import React from 'react';
import Button from './Button';
import '../css/Resume.css';

const ButtonSection = (props) => {
  const { handleLoadButtonClick, handleResetButtonClick } = props;

  return (
    <div className="buttons">
      <Button name="Load" sign="Sample" loadSample={() => handleLoadButtonClick()} />
      <Button name="Reset" sign="Resume" resetInputs={() => handleResetButtonClick()} />
    </div>
  );
}

export default ButtonSection;