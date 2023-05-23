import './styles/app.css';
import logo from './styles/logo.png';
import React from 'react';
import Start from './components/Start';
import Personal from './components/Personal';
import Education from './components/Education';

class App extends React.Component {
  constructor() {
    super();

    this.begin = this.begin.bind(this);
    this.personalNext = this.personalNext.bind(this);
    this.educationNext = this.educationNext.bind(this);
    this.educationPrevious = this.educationPrevious.bind(this);
  }

  begin() {
    document.querySelector('.start').classList.add('none');
    document.querySelector('.personal').classList.remove('none');
  }

  personalNext() {
    document.querySelector('.personal').classList.add('none');
    document.querySelector('.education').classList.remove('none');
  }

  educationPrevious() {
    document.querySelector('.personal').classList.remove('none');
    document.querySelector('.education').classList.add('none');
  }

  educationNext() {
    document.querySelector('.education').classList.add('none');
  }
  render() {
    return (
      <div className='app'>
        <div className='header'>
          <img src={logo} className='logo' alt='logo'></img>
          <div className='nav'></div>
        </div>
        <div className='container'>
          <Start begin={this.begin}/>
          <Personal next={this.personalNext}/>
          <Education previous={this.educationPrevious} next={this.educationNext}/>
        </div>
        <div className='footer'>Kacper Bujak</div>
      </div>
    );
  }
}

export default App;
