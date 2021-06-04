import React, { Component } from 'react';
import TextInput from './TextInput';
import AddButton from './AddButton';
import '../css/Section.css';

class Section extends Component {
  render() {
    return (
      <div className="section">
        <h2 className="section-title">{this.props.sectionTitle}</h2>
        <div className="section-container">
          <TextInput title="First Name"/>
          <TextInput title="Last Name"/>
          <TextInput title="Phone Number"/>
          <TextInput title="Email"/>
          <TextInput title="Location"/>
          <AddButton title="Social Media"/>
        </div>
      </div> 
    );
  }
}

export default Section;