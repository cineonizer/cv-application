import React, { Component } from 'react';
import '../css/Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationArrow,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Separator = (props) => {
  const isLastItem = props.isLast;
  if (!isLastItem) {
    return <span className="separator">|</span>;
  }
  return '';
};

const PersonalInfo = (props) => {
  const isLast = props.info.isLast;

  switch (Object.keys(props.info)[0]) {
    case 'location':
      const location = props.info.location;
      if (location) {
        return (
          <div>
            <FontAwesomeIcon className="icon" icon={faLocationArrow} />
            <span>{location}</span>
            <Separator isLast={isLast} />
          </div>
        );
      }
      return '';
    case 'phone':
      const phone = props.info.phone;
      if (phone) {
        return (
          <div>
            <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
            <span>{phone}</span>
            <Separator isLast={isLast} />
          </div>
        );
      }
      return '';
    case 'email':
      const email = props.info.email;
      if (email) {
        return (
          <div>
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            <a href={`mailto:${email}`}>{email}</a>
            <Separator isLast={isLast} />
          </div>
        );
      }
      return '';
    case 'gitHub':
      const gitHub = props.info.gitHub;
      if (gitHub) {
        return (
          <div>
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <a href={`https://github.com/${gitHub}`}>{gitHub}</a>
            <Separator isLast={isLast} />
          </div>
        );
      }
      return '';
    case 'linkedIn':
      const linkedIn = props.info.linkedIn;
      if (linkedIn) {
        return (
          <div>
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <a href={`https://www.linkedin.com/in/${linkedIn}/`}>{linkedIn}</a>
            <Separator isLast={isLast} />
          </div>
        );
      }
      return '';
    default:
      return '';
  }
};

class Resume extends Component {
  render() {
    const { firstName, lastName } = this.props.data;
    const stateArr = Object.entries(this.props.data);
    const personalInfoArr = stateArr.filter((info) => {
      if (info[1] && info[0] !== 'experiences') return true;
      return false;
    });
    const infoLen = personalInfoArr.length;

    return (
      <div className="resume">
        <div className="name">{`${firstName} ${lastName}`}</div>
        <div className="personal-info-container">
          {personalInfoArr.map(([key, value], index) => {
            const info = { [key]: value, isLast: false };
            if (infoLen === index + 1) info.isLast = true;
            return <PersonalInfo info={info} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default Resume;
