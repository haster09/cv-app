import './styles/app.css'
import logo from './styles/logo.png'
import React from 'react';
import Start from './components/Start'
import Personal from './components/Personal';

class App extends React.Component {
  constructor() {
    super();

    this.begin = this.begin.bind(this);
    this.personalPrevious = this.personalPrevious.bind(this);
  }

  begin() {
    document.querySelector('.start').classList.add('none');
    document.querySelector('.personal').classList.remove('none');
  }

  personalPrevious() {
    document.querySelector('.personal').classList.add('none');
    document.querySelector('.start').classList.remove('none');
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
          <Personal previous={this.personalPrevious}/>
        </div>
        <div className='footer'>Kacper Bujak</div>
      </div>
    );
  }
}

export default App;
