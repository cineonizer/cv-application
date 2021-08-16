import React, { Component } from 'react';
import PersonalSection from './components/PersonalSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillSection from './components/SkillSection';
import Resume from './components/Resume';
import uniqid from 'uniqid';
import './css/App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'Elliot',
      lastName: 'Alderson',
      location: 'New York, NY',
      phone: '212-555-0179',
      email: 'elliotalderson@protonmail.ch',
      gitHub: 'fsociety',
      linkedIn: 'fsociety',
      experiences: [
        {
          id: uniqid(),
          title: 'Senior Network Engineer',
          company: 'Allsafe Cybersecurity',
          city: 'New York, NY',
          from: '2012',
          to: '2015',
          description: 
            'Collaborating with network architects to design and implement functional company networks. \n Installing and configuring networking hardware. \n Creating and implementing network security measures. \n Dealing with escalated network support issues. \n Reporting to the Chief Technology Officer. \n Drawing up network status reports.',
        },
      ],
      education: [
        {
          id: uniqid(),
          degree: 'Bachelor of Science in Computer Science',
          school: 'New York University',
          city: 'New York, NY',
          from: '2008',
          to: '2012',
          description: 'GPA: 4.00',
        }
      ],
      skills: [
        {
          id: uniqid(),
          skill: 'Python',
          description: 'Intermediate Skill',
        },
      ],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.handleDelButtonClick = this.handleDelButtonClick.bind(this);
  }

  handleInputChange = async (e, field, isArrState = undefined, index = undefined) => {
    if (isArrState === 'experiences') {
      const experiencesArr = [...this.state.experiences];
      experiencesArr[index][field] = e.target.value;
      this.setState({
        experiences: experiencesArr,
      });
    } else if (isArrState === 'education') {
      const educationArr = [...this.state.education];
      educationArr[index][field] = e.target.value;
      this.setState({
        education: educationArr,
      });
    } else if (isArrState === 'skills') {
      const skillsArr = [...this.state.skills];
      skillsArr[index][field] = e.target.value;
      this.setState({
        skills: skillsArr,
      });
    } else {
        this.setState({
          [field]: e.target.value,
        });
      }
  };
  
  handleAddButtonClick = (sectionName = undefined) => {
    if (sectionName === 'experience') {
      this.setState({
        experiences: [
          ...this.state.experiences,
          {
            id: uniqid(),
            title: '',
            company: '',
            city: '',
            from: '',
            to: '',
            description: '',
          },
        ],
      });
    } else if (sectionName === 'education') {
      this.setState({
        education: [
          ...this.state.education,
          {
            id: uniqid(),
            degree: '',
            school: '',
            city: '',
            from: '',
            to: '',
            description: '',
          },
        ],
      });
    } else if (sectionName === 'skill') {
      this.setState({
        skills: [
          ...this.state.skills,
          {
            id: uniqid(),
            skill: '',
            description: '',
          },
        ],
      });
    }
  };

  handleDelButtonClick = (index, sectionName = undefined) => {
    if (sectionName === 'experience') {
      const updatedExperienceState = [...this.state.experiences];
      updatedExperienceState.splice(index, 1);
      this.setState({
        experiences: updatedExperienceState,
      });
    } else if (sectionName === 'education') {
      const updatedEducationState = [...this.state.education];
      updatedEducationState.splice(index, 1);
      this.setState({
        education: updatedEducationState,
      });
    } else if (sectionName === 'skill') {
      const updatedSkillsState = [...this.state.skills];
      updatedSkillsState.splice(index, 1);
      this.setState({
        skills: updatedSkillsState,
      });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="all-sections">
          <PersonalSection
            name="Personal Information"
            handleInputChange={this.handleInputChange}
          />
          <ExperienceSection 
            name="Professional Experience"
            handleAddButtonClick={this.handleAddButtonClick}
            handleDelButtonClick={this.handleDelButtonClick}
            handleInputChange={this.handleInputChange}
            experiences={this.state.experiences}
          />
          <EducationSection
            name="Education"
            handleAddButtonClick={this.handleAddButtonClick}
            handleDelButtonClick={this.handleDelButtonClick}
            handleInputChange={this.handleInputChange}
            education={this.state.education}
          />
          <SkillSection
            name="Skills"
            handleAddButtonClick={this.handleAddButtonClick}
            handleDelButtonClick={this.handleDelButtonClick}
            handleInputChange={this.handleInputChange}
            skills={this.state.skills}
          />
        </div>
        <div className="preview">
          <Resume data={this.state} />
        </div>
      </div>
    );
  };
}

export default App;
