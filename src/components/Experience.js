import React from 'react';
import '../styles/experience.css'

// class Experience extends React.Component {

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const values = {
//       jobTitle: e.target.jobTitle.value,
//       employer: e.target.employer.value,
//       city: e.target.city.value,
//       address: e.target.address.value,
//       startDate: e.target.startJob.value,
//       endDate: e.target.endJob.value,
//     }
//     this.props.onSubmit(values);
//   }

//   render() {
//     return (
//       <div className='experience none'> 
//         <div className='title'>Most recent job</div>
//         <form onSubmit={this.handleSubmit}>
//           <div className='data'>
//             <div className='dataElement'>
//               <label htmlFor='jobTitle'>Job Title</label>
//               <input placeholder='e.g. Junior Front-end Developer' type='text' id='jobTitle'></input>
//             </div>
//             <div className='dataElement'>
//               <label htmlFor='employer'>Employer</label>
//               <input placeholder='e.g. Meta' type='text' id='employer'></input>
//             </div>
//             <div className='dataElement'>
//               <label htmlFor='city'>City</label>
//               <input placeholder='e.g. Menlo Park' type='text' id='city'></input>
//             </div>
//             <div className='dataElement'>
//               <label htmlFor='address'>Address</label>
//               <input placeholder='e.g. 635 Middle Ave' type='text' id='address'></input>
//             </div>
//             <div className='dataElement'>
//               <label htmlFor='startJob'>Start Date</label>
//               <input type='date' id='startJob'></input>
//             </div>
//             <div className='dataElement'>
//               <label htmlFor='endJob'>End Date</label>
//               <input type='date' id='endJob'></input>
//             </div>
//           </div>
//           <div className='submit'>
//             <button type='button' onClick={this.props.previous} className='previous'>Previous</button>
//             <button onClick={this.props.next} className='next'>Create</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

const Experience = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      jobTitle: e.target.jobTitle.value,
      employer: e.target.employer.value,
      city: e.target.city.value,
      address: e.target.address.value,
      startDate: e.target.startJob.value,
      endDate: e.target.endJob.value,
    }
    props.onSubmit(values);
  }

  return (
    <div className='experience none'> 
      <div className='title'>Most recent job</div>
      <form onSubmit={handleSubmit}>
        <div className='data'>
          <div className='dataElement'>
            <label htmlFor='jobTitle'>Job Title</label>
            <input placeholder='e.g. Junior Front-end Developer' type='text' id='jobTitle'></input>
          </div>
          <div className='dataElement'>
            <label htmlFor='employer'>Employer</label>
            <input placeholder='e.g. Meta' type='text' id='employer'></input>
          </div>
          <div className='dataElement'>
            <label htmlFor='city'>City</label>
            <input placeholder='e.g. Menlo Park' type='text' id='city'></input>
          </div>
          <div className='dataElement'>
            <label htmlFor='address'>Address</label>
            <input placeholder='e.g. 635 Middle Ave' type='text' id='address'></input>
          </div>
          <div className='dataElement'>
            <label htmlFor='startJob'>Start Date</label>
            <input type='date' id='startJob'></input>
          </div>
          <div className='dataElement'>
            <label htmlFor='endJob'>End Date</label>
            <input type='date' id='endJob'></input>
          </div>
        </div>
        <div className='submit'>
          <button type='button' onClick={props.previous} className='previous'>Previous</button>
          <button onClick={props.next} className='next'>Create</button>
        </div>
      </form>
    </div>
  )
}

export default Experience