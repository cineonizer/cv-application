import React, { Component } from 'react';
import Section from './components/Section';
import './css/App.css'

class App extends Component {
  render() {
    return(
      <div className="app">
        <Section sectionTitle="Personal Information"/>
      </div>
    );
  }
}

export default App;
