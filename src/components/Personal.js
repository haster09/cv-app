import React from 'react'
import '../styles/personal.css'

class Personal extends React.Component {

  render() {
    return(
      <div className='personal none'>
        <div className='title'>Personal Information</div>
        <form>
          <div className='data'>
            <div className='dataElement'>
              <label for='firstName'>First Name</label>
              <input type='text' id='firstName'></input>
            </div>
            <div className='dataElement'>
              <label for='lastName'>Last Name</label>
              <input type='text' id='lastName'></input>
            </div>
            <div className='dataElement'>
              <label for='email'>Email</label>
              <input type='email' id='email'></input>
            </div>
            <div className='dataElement'>
              <label for='phoneNumber'>Phone Number</label>
              <input type='tel' id='phoneNumber'></input>
            </div>
            <div className='dataElement'>
              <label for='address'>Address</label>
              <input type='text' id='address'></input>
            </div>
            <div className='dataElement'>
              <label for='technologies'>Technologies</label>
              <input type='text' id='technologies'></input>
            </div>
          </div>
          <div className='submit'>
            <button onClick={this.props.previous} type='button' className='navBtn previous'>Previous</button>
            <button type='button' className='navBtn next'>Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Personal