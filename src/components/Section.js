import React, { Component } from 'react';
import InfoInput from './InfoInput';
import '../CSS/Section.css';

class Section extends Component {
  render() {
    return (
      <div className="Section">
        <InfoInput />
      </div> 
    );
  }
}

export default Section;