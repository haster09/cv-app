import React from 'react'
import '../styles/education.css'

class Education extends React.Component {

  render() {
    return(
      <div className='education none'>
        <div className='title'>Education</div>
        <form>
          <div className='data'>
            <div className='dataElement'>
              <label for='schoolName'>School Name</label>
              <input placeholder='e.g. XXI Liceum im. św. Stanisława Kostki' type='text' id='schoolName'></input>
            </div>
            <div className='dataElement'>
              <label for='location'>Location</label>
              <input placeholder='e.g. Lublin' type='text' id='location'></input>
            </div>
            <div className='dataElement edu'>
              <label for='education'>Education / Degree</label>
              <input placeholder='e.g. Web Developer' type='text' id='education'></input>
            </div>
              <div className='dataElement'>
              <label for='startDate'>Start Date</label>
              <input type='date' id='startDate'></input>
            </div>
            <div className='dataElement'>
              <label for='endDate'>End Date</label>
              <input type='date' id='endDate'></input>
            </div>
        </div>
          <div className='submit'>
            <button type='button' onClick={this.props.previous} className='previous'>Previous</button>
            <button type='button' onClick={this.props.next} className='next'>Next</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Education