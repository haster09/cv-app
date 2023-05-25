import React from "react";
import '../styles/cv.css'

class CV extends React.Component {
  

  render() {
    return (
      <div className="cv none">
        <div className="cvPersonal cvSection">
          <div className="cvTitle">Personal</div>
          <div className="cvDataElement">First name: <span className="inputData">{this.props.data.personal.firstName}</span></div>
          <div className="cvDataElement">Last name: <span className="inputData">{this.props.data.personal.lastName}</span></div>
          <div className="cvDataElement">Phone number: <span className="inputData">{this.props.data.personal.phoneNumber}</span></div>
          <div className="cvDataElement">Address: <span className="inputData">{this.props.data.personal.address}</span></div>
          <div className="cvDataElement">Country: <span className="inputData">{this.props.data.personal.country}</span></div>
          <div className="cvDataElement">Email: <span className="inputData">{this.props.data.personal.email}</span></div>
        </div>
        <div className="cvEducation cvSection">
          <div className="cvTitle">Education</div>
          <div className="cvDataElement">School name: <span className="inputData">{this.props.data.education.schoolName}</span></div>
          <div className="cvDataElement">Location: <span className="inputData">{this.props.data.education.location}</span></div>
          <div className="cvDataElement">Education/Degree: <span className="inputData">{this.props.data.education.education}</span></div>
          <div className="cvDataElement">Start date: <span className="inputData">{this.props.data.education.startDate}</span></div>
          <div className="cvDataElement">End date: <span className="inputData">{this.props.data.education.endDate}</span></div>
        </div>
        <div className="cvExperience cvSection">
          <div className="cvTitle">Last job</div>
          <div className="cvDataElement">Job title: <span className="inputData">{this.props.data.experience.jobTitle}</span></div>
          <div className="cvDataElement">Employer: <span className="inputData">{this.props.data.experience.employer}</span></div>
          <div className="cvDataElement">City: <span className="inputData">{this.props.data.experience.city}</span></div>
          <div className="cvDataElement">Address: <span className="inputData">{this.props.data.experience.address}</span></div>
          <div className="cvDataElement">Start date: <span className="inputData">{this.props.data.experience.startDate}</span></div>
          <div className="cvDataElement">End date: <span className="inputData">{this.props.data.experience.endDate}</span></div>
        </div>
      </div>
    )
  }
}

export default CV