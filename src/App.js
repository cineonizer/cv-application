import React, { Component } from 'react';
import Section from './components/Section';
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
      gitHub: 'cineonizer',
      linkedIn: 'jamesdkiam',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange = async (e, field) => {
    await this.setState({
      [field]: e.target.value,
    });
  };

  // handleButtonClick = async () => {
  //   await this.setState({
  //     socialMedia: this.state.socialMedia.concat(''),
  //   });
  //   console.log(this.state.socialMedia)
  // };

  render() {
    const { socialMedia } = this.state;

    return (
      <div className="app">
        <div className="all-sections">
          <Section
            name="Personal Information"
            // socialMediaLength={socialMedia.length}
            handleInputChange={this.handleInputChange}
            // handleButtonClick={this.handleButtonClick}
          />
        </div>
        <div className="preview">
          <Resume data={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
