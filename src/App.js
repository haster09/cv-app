import './styles/app.css'
import logo from './styles/logo.png'
import React from 'react';
import Start from './components/Start'

class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <div className='header'>
          <img src={logo} className='logo' alt='logo'></img>
          <div className='nav'></div>
        </div>
        <div className='container'>
          <Start className="startComponent"/>
        </div>
        <div className='footer'></div>
      </div>
    );
  }
}

export default App;
