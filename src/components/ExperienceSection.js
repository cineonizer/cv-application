import React from 'react';
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
        handleInputChange={(e) => handleInputChange(e, value, 'title')}
      />
      <TextInput
        name="Company"
        handleInputChange={(e) => handleInputChange(e, value, 'company')}
      />
      <TextInput
        name="City"
        handleInputChange={(e) => handleInputChange(e, value, 'city')}
      />
      <div className="date">
        <TextInput
          name="From"
          handleInputChange={(e) => handleInputChange(e, value, 'from')}
        />
        <TextInput
          name="To"
          handleInputChange={(e) => handleInputChange(e, value, 'to')}
        />
      </div>
      <TextArea
        name="Description of responsibilities"
        handleInputChange={(e) => handleInputChange(e, value, 'description')}
      />
      <Button
        name="Delete"
        sign="-"
        delSection={() => {
          handleDelButtonClick(props.value, 'experience');
        }}
      />
    </div>
  );
};

const ExperienceSection = (props) => {
  const {
    name,
    handleAddButtonClick,
    handleDelButtonClick,
    handleInputChange,
    experiences,
  } = props;

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
        <Button name="Add" sign="+" addSection={() => handleAddButtonClick()} />
      </div>
    </div>
  );
};

export default ExperienceSection;
