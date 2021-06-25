import React, { Component } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Button from './Button';
import '../css/Section.css';

const ExperienceInput = (props) => {
  const handleDelButtonClick = props.handleDelButtonClick;
  const handleInputChange = props.handleInputChange;
  const value = props.value;

  return (
    <div className="experience-section">
      <TextInput
        name="Title"
        handleInputChange={(e) => handleInputChange(e, 'title', 'experiences', value)}
      />
      <TextInput
        name="Company" 
        handleInputChange={(e) => handleInputChange(e, 'company', 'experiences', value)}
      />
      <TextInput
        name="City"
        handleInputChange={(e) => handleInputChange(e, 'city', 'experiences', value)}
      />
      <div className="date">
        <TextInput
          name="From"
          handleInputChange={(e) => handleInputChange(e, 'from', 'experiences', value)}
        />
        <TextInput
          name="To"
          handleInputChange={(e) => handleInputChange(e, 'to', 'experiences', value)}
        />
      </div>
      <TextArea 
        name="Description of responsibilities"
        handleInputChange={(e) => handleInputChange(e, 'description', 'experiences', value)}
      />
      <Button name="Delete" sign="-" delExperience={() => {handleDelButtonClick(props.value)}}/>
    </div>
  );
};

class ExperienceSection extends Component {
  render() {
    const { name, handleAddButtonClick, handleDelButtonClick, handleInputChange, experiences } = this.props;


    return (
      <div className="section">
        <div className="section-title">{name}</div>
        <div className="all-section-inputs">
          {experiences.map((experience, index) => {
            return (
              <ExperienceInput
                handleDelButtonClick={handleDelButtonClick}
                handleInputChange={handleInputChange}
                key={experience.id}
                value={index}
              />
            );
          })}
          <Button name="Add" sign="+" addExperience={handleAddButtonClick} />
        </div>
      </div>
    );
  }
}

export default ExperienceSection;
