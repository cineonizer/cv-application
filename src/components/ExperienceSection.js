import React, { Component } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Button from './Button';
import '../css/Section.css';

const ExperienceInput = (props) => {
  const handleDelButtonClick = props.handleDelButtonClick;

  return (
    <div className="experience-section">
      <TextInput
        name="Title"
      />
      <TextInput name="Company" />
      <TextInput name="City" />
      <div className="date">
        <TextInput name="From" />
        <TextInput name="To" />
      </div>
      <TextArea name="Description of responsibilities" />
      <Button name="Delete" sign="-" delExperience={() => {handleDelButtonClick(props.value)}}/>
    </div>
  );
};

class ExperienceSection extends Component {
  render() {
    const { name, handleAddButtonClick, handleDelButtonClick, experiences } = this.props;


    return (
      <div className="section">
        <div className="section-title">{name}</div>
        <div className="all-section-inputs">
          {experiences.map((experience, index) => {
            return (
              <ExperienceInput
                handleDelButtonClick={handleDelButtonClick}
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
