import './PersonalDetailsForm.scss'
import Button from '../Button/Button'


const PersonalDetailsForm = ({handleSubmit, tempUser, setTempUser, firstName, setFirstName, lastName, setLastName, email, setEmail, dob, setDob, setMobileNo, mobileNo}) => {

  
  return (
    <form onSubmit={handleSubmit} className="personalDetailsForm">
      <div className='name'>
        
        <div className='firstName'>
          
          <label htmlFor='firstName'>First Name</label>
          <input id="firstName" type="text" required  value={firstName} onChange={e => setFirstName(e.target.value)} />

        </div>
        
        <div className='lastName'>
          
          <label htmlFor='lastName'>Last Name</label>
          <input id="lastName" type="text" required  value={lastName} onChange={e => setLastName(e.target.value)} />

        </div>
      
      </div>
      
      <div>
        
        <label htmlFor='email'>Email Address</label>
        <input id="email" type="email" required  value={email} onChange={e=> setEmail(e.target.value)}/>

      </div>
      
      <div>
        
        <label htmlFor='dob'>Date of Birth</label>
        <input id="dob" type="date" required  value={dob} onChange={e => setDob(e.target.value)}/>

      </div>
      
      <div>
        
        <label htmlFor='mobileNo'>Mobile Number</label>
        <input id="mobileNo" type="text" required  value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}/>

      </div>
      
      <Button text="Next" />

    </form>
  )
}

export default PersonalDetailsForm