import React, { Component } from "react";
import "../css/AddButton.css";

class AddButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    }
  }

  toggleHover = () => {
    this.setState({
      isHovered: !this.state.isHovered,
    });
  };

  render() {
    const { addSocialMediaState } = this.props;

    const btnName = this.state.isHovered ? '' : 'Social Media';

    return (
      <div>
        <button
          className="add-button"
          onClick={addSocialMediaState}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
        >
          <span>{btnName}</span>
        </button>
      </div>
    );
  }
}

export default AddButton;
