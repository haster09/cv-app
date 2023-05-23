import React from 'react';
import '../styles/experience.css'

class Experience extends React.Component {

  render() {
    return (
      <div className='experience none'> 
        <div className='title'>Most recent job</div>
        <form>
          <div className='data'>
            <div className='dataElement'>
              <label for='jobTitle'>Job Title</label>
              <input placeholder='e.g. Junior Front-end Developer' type='text' id='jobTitle'></input>
            </div>
            <div className='dataElement'>
              <label for='employer'>Employer</label>
              <input placeholder='e.g. Meta' type='text' id='employer'></input>
            </div>
            <div className='dataElement'>
              <label for='city'>City</label>
              <input placeholder='e.g. Menlo Park' type='text' id='city'></input>
            </div>
            <div className='dataElement'>
              <label for='address'>Address</label>
              <input placeholder='e.g. 635 Middle Ave' type='text' id='address'></input>
            </div>
            <div className='dataElement'>
              <label for='startJob'>Start Date</label>
              <input type='date' id='startJob'></input>
            </div>
            <div className='dataElement'>
              <label for='endJob'>End Date</label>
              <input type='date' id='endJob'></input>
            </div>
          </div>
          <div className='submit'>
            <button type='button' onClick={this.props.previous} className='previous'>Previous</button>
            <button type='button' onClick={this.props.next} className='next'>Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Experience