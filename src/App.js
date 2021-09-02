import React, { useState } from 'react';
import PersonalSection from './components/PersonalSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillSection from './components/SkillSection';
import ButtonSection from './components/ButtonSection';
import Resume from './components/Resume';
import uniqid from 'uniqid';
import './css/App.css';

const App = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    location: '',
    phone: '',
    email: '',
    gitHub: '',
    linkedIn: '',
    experiences: [],
    education: [],
    skills: [],
  });

  const handlePersonalInputsChange = (e, field) => {
    setState((state) => ({
      ...state,
      [field]: e.target.value,
    }));
  };

  const handleExperiencesInputsChange = (e, index, field) => {
    const newExperiencesArr = state.experiences;
    newExperiencesArr[index][field] = e.target.value;
    setState((state) => ({
      ...state,
      experiences: newExperiencesArr,
    }));
  };

  const handleEducationsInputsChange = (e, index, field) => {
    const newEducationArr = [...state.education];
    newEducationArr[index][field] = e.target.value;
    setState((state) => ({
      ...state,
      education: newEducationArr,
    }));
  };

  const handleSkillsInputsChange = (e, index, field) => {
    const newSkillsArr = [...state.skills];
    newSkillsArr[index][field] = e.target.value;
    setState((state) => ({
      ...state,
      skills: newSkillsArr,
    }));
  };

  const handleExperiencesAddButtonClick = () => {
    setState((state) => ({
      ...state,
      experiences: [
        ...state.experiences,
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
    }));
  };

  const handleEducationAddButtonClick = () => {
    setState((state) => ({
      ...state,
      education: [
        ...state.education,
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
    }));
  };

  const handleSkillsAddButtonClick = () => {
    setState((state) => ({
      ...state,
      skills: [
        ...state.skills,
        {
          id: uniqid(),
          skill: '',
          description: '',
        },
      ],
    }));
  };

  const handleExperiencesDelButtonClick = (index) => {
    const newExperiencesArr = [...state.experiences];
    newExperiencesArr.splice(index, 1);
    setState((state) => ({
      ...state,
      experiences: newExperiencesArr,
    }));
  };

  const handleEducationDelButtonClick = (index) => {
    const newEducationArr = [...state.education];
    newEducationArr.splice(index, 1);
    setState((state) => ({
      ...state,
      education: newEducationArr,
    }));
  };

  const handleSkillsDelButtonClick = (index) => {
    const newSkillsArr = [...state.skills];
    newSkillsArr.splice(index, 1);
    setState((state) => ({
      ...state,
      skills: newSkillsArr,
    }));
  };

  const handleResetButtonClick = () => {
    [...document.querySelectorAll('input')].forEach(
      (input) => (input.value = '')
    );

    setState({
      firstName: '',
      lastName: '',
      location: '',
      phone: '',
      email: '',
      gitHub: '',
      linkedIn: '',
      experiences: [],
      education: [],
      skills: [],
    });
  };

  const handleLoadButtonClick = () => {
    setState({
      firstName: 'Elliot',
      lastName: 'Alderson',
      location: 'Alderson',
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
            'Collaborating with network architects to design and implement functional company networks. \n Installing and configuring networking hardware. \n Creating and implementing network security measures. \n Dealing with escalated network support issues. \n Reporting to the Chief Technology Officer. \n Drawing up network status reports. \n  Monitor network performance and troubleshoot problem areas as needed. \n Participate in managing all network security solutions. \n Perform server and security audits, and system backups and recovery. \n Oversee new and existing equipment, hardware, and software upgrades',
        },
        {
          id: uniqid(),
          title: 'Vigilante Hacker',
          company: 'fsociety',
          city: 'New York, NY',
          from: '2012',
          to: '2015',
          description:
            'Overthrew the world economy \n Initiated a massive distributed denial of service attack that made E-Corp go offline. \n Erased millions of debt. \n Infiltrated the security walls of Steel Mountain and planted a Raspberry Pi.',
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
          description:
            'GPA: 4.00 \n Graduated with Summa Cum Laude \n Participated in Annual Hackathon that garnered first place in the state.',
        },
      ],
      skills: [
        {
          id: uniqid(),
          skill: 'Fortinet, Cisco, VPN',
          description: 'Profound knowledge of networking technologies',
        },
        {
          id: uniqid(),
          skill: 'Symantec AV, Nessus, HPiLO',
          description: 'Extensive technical knowledge of hacking tools',
        },
        {
          id: uniqid(),
          skill: 'Information Security, Wireshark',
          description: 'Expertise in security operations',
        },
        {
          id: uniqid(),
          skill: 'Intrusion detection, Data Recovery',
          description: 'Excellent in security procedures',
        },
        {
          id: uniqid(),
          skill: '.NET, SQL Server',
          description: 'Adept in server architectures',
        },
      ],
    });
  };

  return (
    <div className="app">
      <div className="all-sections">
        <PersonalSection
          name="Personal Information"
          handleInputChange={handlePersonalInputsChange}
        />
        <ExperienceSection
          name="Professional Experience"
          handleAddButtonClick={handleExperiencesAddButtonClick}
          handleDelButtonClick={handleExperiencesDelButtonClick}
          handleInputChange={handleExperiencesInputsChange}
          experiences={state.experiences}
        />
        <EducationSection
          name="Education"
          handleAddButtonClick={handleEducationAddButtonClick}
          handleDelButtonClick={handleEducationDelButtonClick}
          handleInputChange={handleEducationsInputsChange}
          education={state.education}
        />
        <SkillSection
          name="Skills"
          handleAddButtonClick={handleSkillsAddButtonClick}
          handleDelButtonClick={handleSkillsDelButtonClick}
          handleInputChange={handleSkillsInputsChange}
          skills={state.skills}
        />
        <ButtonSection
          handleLoadButtonClick={handleLoadButtonClick}
          handleResetButtonClick={handleResetButtonClick}
        />
      </div>
      <div className="preview">
        <Resume data={state} />
      </div>
    </div>
  );
};

export default App;