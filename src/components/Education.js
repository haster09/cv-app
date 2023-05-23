import React from 'react'
import '../styles/education.css'

class Education extends React.Component {

  render() {
    return(
      <div className='education none'>
        <div className='educationTitle'>Education</div>
        <div className='eduData'>
            <div className='eduDataElement'>
              <label for='schoolName'>School Name</label>
              <input type='text' id='schoolName'></input>
            </div>
            <div className='eduDataElement'>
              <label for='location'>Location</label>
              <input type='text' id='location'></input>
            </div>
            <div className='eduDataElement edu'>
              <label for='education'>Education</label>
              <input type='text' id='education'></input>
            </div>
            <div className='eduDataElement'>
              <label for='startDate'>Start Date</label>
              <input type='date' id='startDate'></input>
            </div>
            <div className='eduDataElement'>
              <label for='endDate'>End Date</label>
              <input type='date' id='endDate'></input>
            </div>
        </div>
        <div className='submit'>
          <button onClick={this.props.previous} className='eduPrevious'>Previous</button>
          <button onClick={this.props.next} className='eduNext'>Next</button>
        </div>
      </div>
    )
  }
}

export default Education