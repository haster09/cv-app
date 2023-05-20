import './styles/app.css'
import logo from './styles/logo.png'
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <div className='header'>
          <img src={logo} className='logo' alt='logo'></img>
          <div className='nav'></div>
        </div>
        <div className='container'>
          <div className='content'>
            <div className='start'>
              <div className='text'>Create your <span className='cv'>Curriculum vitae</span></div>
              <button className='startBtn'>START</button>
            </div>
          </div>
        </div>
        <div className='footer'></div>
      </div>
    );
  }
}

export default App;
