import React, { useState } from 'react';
import '../css/Button.css';

const Button = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const onClickEvent = () => {
    if (props.sign === '+') props.addSection();
    else if (props.sign === 'Sample') props.loadSample();
    else if (props.sign === 'Resume') props.resetInputs();
    else props.delSection();
  };

  const btnName = isHovered ? '' : props.name;

  return (
    <div>
      <button
        className="button"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={onClickEvent}
        data-sign={props.sign}
      >
        <span>{btnName}</span>
      </button>
    </div>
  );
};

export default Button;
