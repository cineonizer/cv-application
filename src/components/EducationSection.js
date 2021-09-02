import React from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Button from './Button';
import '../css/Section.css';

const EducationInput = (props) => {
  const handleDelButtonClick = props.handleDelButtonClick;
  const handleInputChange = props.handleInputChange;
  const value = props.value;

  return (
    <div className="education-section">
      <TextInput
        name="Degree and Major"
        handleInputChange={(e) => handleInputChange(e, value, 'degree')}
      />
      <TextInput
        name="School"
        handleInputChange={(e) => handleInputChange(e, value, 'school')}
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
        name="Description of Education"
        handleInputChange={(e) => handleInputChange(e, value, 'description')}
      />
      <Button
        name="Delete"
        sign="-"
        delSection={() => {
          handleDelButtonClick(props.value, 'education');
        }}
      />
    </div>
  );
};

const EducationSection = (props) => {
  const {
    name,
    handleAddButtonClick,
    handleDelButtonClick,
    handleInputChange,
    education,
  } = props;

  return (
    <div className="section">
      <div className="section-title">{name}</div>
      <div className="all-section-inputs">
        {education.map((education, index) => {
          return (
            <EducationInput
              handleDelButtonClick={handleDelButtonClick}
              handleInputChange={handleInputChange}
              key={education.id}
              value={index}
            />
          );
        })}
        <Button name="Add" sign="+" addSection={() => handleAddButtonClick()} />
      </div>
    </div>
  );
};

export default EducationSection;
