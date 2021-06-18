import React, { Component } from 'react';
import '../css/Button.css';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };
  }

  toggleHover = () => {
    this.setState({
      isHovered: !this.state.isHovered,
    });
  };

  onClickEvent = (props) => {
    if (props.sign === '+') props.addExperience();
    else props.delExperience();
  };

  render() {
    const btnName = this.state.isHovered ? '' : this.props.name;

    return (
      <div>
        <button
          className="button"
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          onClick={() => {this.onClickEvent(this.props)}}
          data-sign={this.props.sign}
        >
          <span>{btnName}</span>
        </button>
      </div>
    );
  }
}

export default Button;
