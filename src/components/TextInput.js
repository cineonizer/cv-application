import React from 'react';
import '../css/TextInput.css';

const TextInput = (props) => {
  const { name, handleInputChange } = props;

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
};

export default TextInput;
