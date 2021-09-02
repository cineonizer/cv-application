import React from 'react';
import '../css/TextArea.css';

const TextArea = (props) => {
  const { name, handleInputChange } = props;

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
};

export default TextArea;
