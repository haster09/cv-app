import React from "react";
import '../styles/start.css'

class Start extends React.Component {

  render() {
    return (
      <div className='content'>
        <div className='start'>
          <div className='text'>Create your <span className='cv'>Curriculum vitae</span></div>
          <button className='startBtn'>START</button>
        </div>
      </div>
    )
  }
}

export default Start