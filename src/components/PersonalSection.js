import React, { Component } from 'react';
import TextInput from './TextInput';
import '../css/Section.css';

class PersonalSection extends Component {
  render() {
    const { name, handleInputChange } = this.props;

    return (
      <div className="section">
        <div className="section-title">{name}</div>
        <div className="all-section-inputs">
          <TextInput
            name="First Name"
            handleInputChange={(e) => handleInputChange(e, 'firstName')}
          />
          <TextInput
            name="Last Name"
            handleInputChange={(e) => handleInputChange(e, 'lastName')}
          />
          <TextInput
            name="Location"
            handleInputChange={(e) => handleInputChange(e, 'location')}
          />
          <TextInput
            name="Phone"
            handleInputChange={(e) => handleInputChange(e, 'phone')}
          />
          <TextInput
            name="Email"
            handleInputChange={(e) => handleInputChange(e, 'email')}
          />
          <TextInput
            name="GitHub Username"
            handleInputChange={(e) => handleInputChange(e, 'gitHub')}
          />
          <TextInput
            name="LinkedIn Username"
            handleInputChange={(e) => handleInputChange(e, 'linkedIn')}
          />
        </div>
      </div>
    );
  }
}

export default PersonalSection;
