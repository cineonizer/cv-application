import React, { Component } from 'react';
import '../css/AddButton.css';

class AddButton extends Component {
  render() {
    return (
      <div>
        <button className="add-button">
          <span>{this.props.title}</span>
        </button>
      </div>
    );
  }
}

export default AddButton;
