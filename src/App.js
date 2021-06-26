import React, { Component } from 'react';
import PersonalSection from './components/PersonalSection';
import ExperienceSection from './components/ExperienceSection';
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
      experiences: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.handleDelButtonClick = this.handleDelButtonClick.bind(this);
  }

  handleInputChange = async (e, field, isArrState = undefined, index = undefined) => {
    if (isArrState === 'experiences') {
      const experiencesArr = [...this.state.experiences]
      experiencesArr[index][field] = e.target.value
      await this.setState({
        experiences: experiencesArr,
      });
    } else {
        await this.setState({
          [field]: e.target.value,
        });
      }
  };
  
  handleAddButtonClick = async () => {
    await this.setState({
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
  };

  handleDelButtonClick = async (index) => {
    let updatedExperienceState = [...this.state.experiences];
    updatedExperienceState.splice(index, 1);
    await this.setState({
      experiences: updatedExperienceState,
    });
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
        </div>
        <div className="preview">
          <Resume data={this.state} />
        </div>
      </div>
    );
  };
}

export default App;
