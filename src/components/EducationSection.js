import React, { Component } from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Button from './Button';
import '../css/Section.css'

const EducationInput = (props) => {
  const handleDelButtonClick = props.handleDelButtonClick;
  const handleInputChange = props.handleInputChange;
  const value = props.value;

  return (
    <div className="education-section">
      <TextInput
        name="Degree and Major"
        handleInputChange={(e) => handleInputChange(e, 'degree', 'education', value)}
      />
      <TextInput
        name="School" 
        handleInputChange={(e) => handleInputChange(e, 'school', 'education', value)}
      />
      <TextInput
        name="City"
        handleInputChange={(e) => handleInputChange(e, 'city', 'education', value)}
      />
      <div className="date">
        <TextInput
          name="From"
          handleInputChange={(e) => handleInputChange(e, 'from', 'education', value)}
        />
        <TextInput
          name="To"
          handleInputChange={(e) => handleInputChange(e, 'to', 'education', value)}
        />
      </div>
      <TextArea 
        name="Description of Education"
        handleInputChange={(e) => handleInputChange(e, 'description', 'education', value)}
      />
      <Button name="Delete" sign="-" delSection={() => {handleDelButtonClick(props.value, 'education')}}/>
    </div>
  );
};

class EducationSection extends Component {
  render() {
    const {
      name,
      handleAddButtonClick,
      handleDelButtonClick,
      handleInputChange,
      education,
    } = this.props;
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
          <Button name="Add" sign="+" addSection={() => handleAddButtonClick('education')}/> 
        </div>
      </div>
    );
  };
}

export default EducationSection;