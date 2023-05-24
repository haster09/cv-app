import React from "react";
import '../styles/start.css'

class Start extends React.Component {
    render() {
    return (
      <div className='start'>
        <div className='content'>
          <div className='text'>Create your <span className='bold'>Curriculum vitae</span></div>
          <button className='startBtn' onClick={this.props.begin}>let's go</button>
        </div>
      </div>
    )
  }
}

export default Start