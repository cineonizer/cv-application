import React, { Component } from 'react';
import TextInput from './TextInput';
import SocialMediaInput from './SocialMediaInput';
import AddButton from './AddButton';
import '../css/Section.css';

class Section extends Component {

  AddSocialMediaInput = (props) => {
    const socialMediaLength = props;
    if (socialMediaLength) {
      return <SocialMediaInput />;
    }
    return '';
  };

  render() {
    const { name, handleInputChange, handleButtonClick, socialMediaLength } = this.props;

    return (
      <div className="section">
        <div className="section-title">{name}</div>
        <div className="all-section-inputs">
          <TextInput
            name="First Name"
            handleInputChange={(e) => handleInputChange(e, "firstName")}
          />
          <TextInput
            name="Last Name"
            handleInputChange={(e) => handleInputChange(e, "lastName")}
          />
          <TextInput
            name="Location"
            handleInputChange={(e) => handleInputChange(e, "location")}
          />
          <TextInput
            name="Phone Number"
            handleInputChange={(e) => handleInputChange(e, "phone")}
          />
          <TextInput
            name="Email"
            handleInputChange={(e) => handleInputChange(e, "email")}
          />
          <AddButton addSocialMediaState={handleButtonClick} />
          {this.AddSocialMediaInput(socialMediaLength)}
        </div>
      </div>
    );
  }
}

export default Section;