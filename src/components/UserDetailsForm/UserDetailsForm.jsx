import './UserDetailsForm.scss'
import Button from '../Button/Button'

const UserDetailsForm = ({handleSubmit, passwordErr, goBack, residence, setResidence, studentNo, setStudentNo }) => {
  return (
    <form onSubmit={handleSubmit} className="userDetailsForm">
      
      <div>
        
        <label htmlFor='residence'>Which Halls of Residence do you reside at?</label>
        
        <select id="residence" value={residence} onChange={e => setResidence(e.target.value)}>
          
          <option value="badockHall">Badock Hall</option>
          <option value="aHall">A Hall</option>
          <option value="cHall">C Hall</option>
          <option value="dHall">D Hall</option>
        </select>

      </div>
      
      <div>
        
        <label htmlFor='studentNo'>Student Number</label>
        <input type="number" id="studentNo"  required value={studentNo} min={1} onChange={e => setStudentNo(e.target.value)}/>

      </div>
      
      <div>
        
        <label htmlFor='password'>Create Password</label>
        <input type="password" id="password"  required minLength={1} />

      </div>
      
      <div>
        
        <label htmlFor='confirmPass'>Confirm Password</label>
        <input type="password" id="confirmPass"  required minLength={1}/>

      </div>
      
      <div>
        
        {passwordErr && <div>Password's mis-match</div>}

      </div>
      
      <div>
        
        <Button text="Previous" handleClick={goBack} isSecondary />
        <Button text="Next"/>

      </div>
      

    </form>
  )
}

export default UserDetailsForm