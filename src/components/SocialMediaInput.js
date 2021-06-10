import React, { Component } from 'react';
import TextInput from './TextInput';
import '../css/SocialMediaInput.css';

class SocialMediaInput extends Component {
  render () {
    return (
      <div className="socialmedia-container">
        <select name="socialmedia" className="select-button" defaultValue="select an option">
          <option value="select an option" disabled>select an option</option>
          <option value="GitHub">GitHub</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>
        <TextInput name="Username" />
        <TextInput name="URL"/>
        <div className="delete-button">X</div>
      </div>
    );
  }
}

export default SocialMediaInput;