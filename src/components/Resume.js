import React, { Component } from 'react';
import '../css/Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationArrow, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Test = (props) => {
  if (props.data) {
    return <div>there is a first name</div>
  } else {
    return <div>there is no first name</div>
  }
}

class Resume extends Component {
  render() {
    const { firstName, lastName, phone, email, location } = this.props.data;
    return (
      <div className="resume">
        <div className="name">{`${firstName} ${lastName}`}</div>
        <div className="personal-info-container">
          {/* <Test data={firstName}/> */}
          <div className="personal-info">
            <FontAwesomeIcon className="icon" icon={faLocationArrow} />
            <span>{location}</span>
            <span className="separator">|</span>
          </div>
          <div className="personal-info">
            <FontAwesomeIcon className="icon" icon={faPhoneAlt}/>
            <span>{phone}</span>
            <span className="separator">|</span>
          </div>
          <div className="personal-info">
            <FontAwesomeIcon className="icon" icon={faEnvelope}/>
            <span>{email}</span>
            <span className="separator">|</span>
          </div>
          <div className="personal-info">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <span>username</span>
            <span className="separator">|</span>
          </div>
          <div className="personal-info">
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <span>username</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;