import React from 'react'
import '../styles/education.css'

// class Education extends React.Component {

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const values = {
//       schoolName: e.target.schoolName.value,
//       location: e.target.location.value,
//       education: e.target.education.value,
//       startDate: e.target.startDate.value,
//       endDate: e.target.endDate.value,
//     }
//     this.props.onSubmit(values);
//   }

//   render() {
//     return(
//       <div className='education none'>
//         <div className='title'>Education</div>
//         <form onSubmit={this.handleSubmit}>
//           <div className='data'>
//             <div className='dataElement'>
//               <label htmlFor='schoolName'>School Name</label>
//               <input placeholder='e.g. XXI Liceum im. św. Stanisława Kostki' type='text' id='schoolName'></input>
//             </div>
//             <div className='dataElement'>
//               <label htmlFor='location'>Location</label>
//               <input placeholder='e.g. Lublin' type='text' id='location'></input>
//             </div>
//             <div className='dataElement edu'>
//               <label htmlFor='education'>Education / Degree</label>
//               <input placeholder='e.g. Web Developer' type='text' id='education'></input>
//             </div>
//               <div className='dataElement'>
//               <label htmlFor='startDate'>Start Date</label>
//               <input type='date' id='startDate'></input>
//             </div>
//             <div className='dataElement'>
//               <label htmlFor='endDate'>End Date</label>
//               <input type='date' id='endDate'></input>
//             </div>
//         </div>
//           <div className='submit'>
//             <button type='button' onClick={this.props.previous} className='previous'>Previous</button>
//             <button onClick={this.props.next} className='next'>Next</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

const Education = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      schoolName: e.target.schoolName.value,
      location: e.target.location.value,
      education: e.target.education.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
    }
    props.onSubmit(values);
  }
  return (
    <div className='education none'>
    <div className='title'>Education</div>
    <form onSubmit={handleSubmit}>
      <div className='data'>
        <div className='dataElement'>
          <label htmlFor='schoolName'>School Name</label>
          <input placeholder='e.g. XXI Liceum im. św. Stanisława Kostki' type='text' id='schoolName'></input>
        </div>
        <div className='dataElement'>
          <label htmlFor='location'>Location</label>
          <input placeholder='e.g. Lublin' type='text' id='location'></input>
        </div>
        <div className='dataElement edu'>
          <label htmlFor='education'>Education / Degree</label>
          <input placeholder='e.g. Web Developer' type='text' id='education'></input>
        </div>
          <div className='dataElement'>
          <label htmlFor='startDate'>Start Date</label>
          <input type='date' id='startDate'></input>
        </div>
        <div className='dataElement'>
          <label htmlFor='endDate'>End Date</label>
          <input type='date' id='endDate'></input>
        </div>
    </div>
      <div className='submit'>
        <button type='button' onClick={props.previous} className='previous'>Previous</button>
        <button onClick={props.next} className='next'>Next</button>
      </div>
    </form>
  </div>
  )
}

export default Education