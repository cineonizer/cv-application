import React, { Component } from 'react';
import PersonalSection from './components/PersonalSection';
import ExperienceSection from './components/ExperienceSection';
import Resume from './components/Resume';
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
        ['title', 'fromdate', 'todate', 'company', 'city', 'description']
      ],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.handleDelButtonClick = this.handleDelButtonClick.bind(this);
  }

  handleInputChange = async (e, field) => {
    console.log(e.target.placeholder)
    await this.setState({
      [field]: e.target.value,
    });
  };

  handleAddButtonClick = async () => {
    await this.setState({
      experiences: [...this.state.experiences, []],
    });
  };

  handleDelButtonClick = async (e) => {
    let arr = [...this.state.experiences];
    console.log(e)
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
