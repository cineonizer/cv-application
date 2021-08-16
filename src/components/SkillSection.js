import React, { Component } from 'react';
import TextInput from './TextInput';
import Button from '../components/Button';
import '../css/Section.css';

const SkillsInput = (props) => {
  const handleDelButtonClick = props.handleDelButtonClick;
  const handleInputChange = props.handleInputChange;
  const value = props.value;

  return (
    <div className="skill-section">
      <TextInput
        name="Skill"
        handleInputChange={(e) => handleInputChange(e, 'skill', 'skills', value)}
      />
      <TextInput
        name="Description"
        handleInputChange={(e) => handleInputChange(e, 'description', 'skills', value)}
      />
      <Button name="Delete" sign="-" delSection={() => {handleDelButtonClick(props.value, 'skill')}}/>
    </div>
  );
};

class SkillSection extends Component {
  render() {
    const {
      name,
      skills,
      handleAddButtonClick,
      handleDelButtonClick,
      handleInputChange,
    } = this.props;

    return (
      <div className="section">
        <div className="section-title">{name}</div>
        <div className="all-section-inputs">
          {skills.map((skill, index) => {
            return (
              <SkillsInput
                handleDelButtonClick={handleDelButtonClick}
                handleInputChange={handleInputChange}
                key={skill.id}
                value={index}
              />
            );
          })}
          <Button name="Add" sign="+" addSection={() => handleAddButtonClick('skill')} />
        </div>
      </div>
    );
  };
}

export default SkillSection;