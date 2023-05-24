import React from "react";
import '../styles/cv.css'

class CV extends React.Component {
  

  render() {
    return (
      <div className="cv none">
        <div className="cvPersonal">
          <div id="cvFirstName">{this.props.data.personal.firstName}</div>
          <div id="cvLastName"></div>
          <div id="cvPhoneNumber"></div>
          <div id="cvCountry"></div>
          <div id="cvPersonalAddress"></div>
          <div id="cvEmail"></div>
        </div>
        <div className="cvEducation"></div>
        <div className="cvExperience"></div>
      </div>
    )
  }
}

export default CV