import './styles/app.css';
import logo from './styles/logo.png';
import React, {useState} from 'react';
import Start from './components/Start';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import CV from './components/cv';

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       personal: "",
//       education: "",
//       experience: "",
//     }
//   }



//   getPersonal = (personal) => {
//     this.setState({personal: personal});
//   }

//   getEducation = (education) => {
//     this.setState({education: education});
//   }

//   getExperience = (experience) => {
//     this.setState({experience: experience});
//   }

//   begin() {
//     document.querySelector('.start').classList.add('none');
//     document.querySelector('.personal').classList.remove('none');
//   }

//   personalNext() {
//     document.querySelector('.personal').classList.add('none');
//     document.querySelector('.education').classList.remove('none');
//   }

//   educationPrevious() {
//     document.querySelector('.personal').classList.remove('none');
//     document.querySelector('.education').classList.add('none');
//   }

//   educationNext() {
//     document.querySelector('.education').classList.add('none');
//     document.querySelector('.experience').classList.remove('none')
//   }

//   experiencePrevious() {
//     document.querySelector('.experience').classList.add('none');
//     document.querySelector('.education').classList.remove('none');
//   }

//   experienceNext() {
//     document.querySelector('.experience').classList.add('none');
//     document.querySelector('.cv').classList.remove('none');
//   }


//   render() {
//     return (
//       <div className='app'>
//         <div className='header'>
//           <img src={logo} className='logo' alt='logo'></img>
//           <div className='nav'></div>
//         </div>
//         <div className='container'>
//           <Start begin={this.begin}/>
//           <Personal onSubmit={this.getPersonal} next={this.personalNext}/>
//           <Education onSubmit={this.getEducation} previous={this.educationPrevious} next={this.educationNext}/>
//           <Experience onSubmit={this.getExperience} previous={this.experiencePrevious} next={this.experienceNext}/>
//           <CV data={this.state}/>
//         </div>
//         <div className='footer'>Kacper Bujak</div>
//       </div>
//     );
//   }
// }

const App = () => {
  const [personal, setPersonal] = useState({personal: ''});
  const [education, setEducation] = useState({education: ''});
  const [experience, setExperience] = useState({experience: ''});

  const begin = () => {
    document.querySelector('.start').classList.add('none');
    document.querySelector('.personal').classList.remove('none');
  }

  const personalNext = () => {
    document.querySelector('.personal').classList.add('none');
    document.querySelector('.education').classList.remove('none');
  }

  const educationPrevious = () => {
    document.querySelector('.personal').classList.remove('none');
    document.querySelector('.education').classList.add('none');
  }

  const educationNext = () => {
    document.querySelector('.education').classList.add('none');
    document.querySelector('.experience').classList.remove('none')
  }

  const experiencePrevious = () => {
    document.querySelector('.experience').classList.add('none');
    document.querySelector('.education').classList.remove('none');
  }

  const experienceNext = () => {
    document.querySelector('.experience').classList.add('none');
    document.querySelector('.cv').classList.remove('none');
  }

  const getPersonal = (personal) => setPersonal({personal: personal});
  const getEducation = (education) => setEducation({education: education});
  const getExperience = (experience) => setExperience({experience: experience});

  return (
    <div className='app'>
    <div className='header'>
      <img src={logo} className='logo' alt='logo'></img>
      <div className='nav'></div>
    </div>
    <div className='container'>
      <Start begin={begin}/>
      <Personal onSubmit={getPersonal} next={personalNext}/>
      <Education onSubmit={getEducation} previous={educationPrevious} next={educationNext}/>
      <Experience onSubmit={getExperience} previous={experiencePrevious} next={experienceNext}/>
      <CV dataPersonal={personal} dataEducation={education} dataExperience={experience}/>
    </div>
    <div className='footer'>Kacper Bujak</div>
  </div>
  )
}

export default App;
