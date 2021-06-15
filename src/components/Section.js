import React, { Component } from 'react';
import TextInput from './TextInput';
import '../css/Section.css';

class Section extends Component {

  // AddSocialMediaInput = (props) => {
  //   const socialMediaLength = props;
  //   if (socialMediaLength) {
  //     return <SocialMediaInput />;
  //   }
  //   return '';
  // };

  render() {
    const { name, handleInputChange } = this.props;

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
            name="Phone"
            handleInputChange={(e) => handleInputChange(e, "phone")}
          />
          <TextInput
            name="Email"
            handleInputChange={(e) => handleInputChange(e, "email")}
          />
          {/* {this.AddSocialMediaInput(socialMediaLength)} */}
          <TextInput
            name="GitHub Username"
            handleInputChange={(e) => handleInputChange(e, "gitHub")}
          />
          <TextInput
            name="LinkedIn Username"
            handleInputChange={(e) => handleInputChange(e, "linkedIn")}
          />
        </div>
      </div>
    );
  }
}

export default Section;