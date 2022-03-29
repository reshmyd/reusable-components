import './App.scss';
import { useState } from 'react';

import Nav from './components/Nav/Nav';
import PageHeading from './components/PageHeading/PageHeading';
import TabItem from './components/TabItem/TabItem';
import PersonalDetailsForm from './components/PersonalDetailsForm/PersonalDetailsForm';
import UserDetailsForm from './components/UserDetailsForm/UserDetailsForm';
import Terms from './components/Terms/Terms';


const App = () => {

  const [users, setUsers] = useState([])
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [dob, setDob] = useState("")
  const [mobileNo, setMobileNo] = useState("")
  const [residence, setResidence] = useState("Badock Hall")
  const [studentNo, setStudentNo] = useState("")
  const [password, setPassword] = useState("")
  
  const [personalDetailsTab, setPersonalDetailsTab] = useState(true)
  const [userDetailsTab, setUserDetailsTab] = useState(false)
  const [termsTab, setTermsTab] = useState(false)
  const [success, setSuccess] = useState(false)

  const [passwordErr, setPasswordErr] = useState(false)
  
  
  const pageHeading = personalDetailsTab ? "Let's get started..." 
                      : userDetailsTab ? `Nice to meet you, ${firstName}` : "Final step..."                  

                    

  const personalDetailsFormSubmit = e => {
    e.preventDefault()
    setPersonalDetailsTab(false)
    setUserDetailsTab(true)
    
    console.log(users)
  }

  
  
  const userDetailsFormSubmit = e => {
    e.preventDefault()
    setPasswordErr(false)
    
    if (e.target[2].value !== e.target[3].value) {
      setPasswordErr(true)
      return
    }
    
    setPassword(e.target[2].value)
    setUserDetailsTab(false)
    setTermsTab(true)

    console.log(users)
  }

  
  
  const termsSubmit = e => {
    e.preventDefault()
    
    if (e.target[0].checked) {

      const temp = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          dob: dob,
          mobileNo: mobileNo,
          residence: residence,
          studentNo: studentNo,
          password: password
  
        }
        console.log(temp)
      
      setUsers(u => [...u, temp])
        
      
      // return u
      
      
      setFirstName("")
      setEmail("")
      setDob("")
      setMobileNo("")
      setPassword("")
      setLastName("")
      setStudentNo("")
      setResidence("Badock Hall")
      
      console.log(users)
      
      
      
      setTermsTab(false)
      setSuccess(true)
    } 
    
    else alert("Check acknowledge terms")
  }

  
  
  
  const handleUserDetailsGoBack = () => {
    setUserDetailsTab(false)
    setPersonalDetailsTab(true)
  }

  
  
  
  const handleTermsGoBack = () => {
    setTermsTab(false)
    setUserDetailsTab(true)
  }
  
  
  return (
    <div className="App">
      
      <Nav />
      
      <div className='main'>
        
        <PageHeading text={pageHeading} />
        
        <div className='tabs'>
         {!success && (<><TabItem stepNo="STEP 01" step="Personal Details"  active={personalDetailsTab} /> 
          <TabItem stepNo="STEP 02" step="User Details"  active={userDetailsTab} /> 
          <TabItem stepNo="STEP 01" step="Terms & Conditions"  active={termsTab} /></>) }
        </div>
        
        <div>
          
          {personalDetailsTab && <PersonalDetailsForm handleSubmit={personalDetailsFormSubmit} 
          lastName={lastName} setLastName={setLastName} firstName={firstName} setFirstName={setFirstName}
          dob={dob} setDob={setDob} email={email} setEmail={setEmail} mobileNo={mobileNo} setMobileNo={setMobileNo}/>}
          
          {userDetailsTab && <UserDetailsForm handleSubmit={userDetailsFormSubmit} passwordErr={passwordErr} goBack={handleUserDetailsGoBack} residence={residence} setResidence={setResidence} studentNo={studentNo} setStudentNo={setStudentNo} />}
          
          {termsTab && <Terms goBack={handleTermsGoBack} handleSubmit={termsSubmit}/>}
          
          {success && <div>Successfully Registered!</div>}

        </div>
        
      </div>
      
      
    </div>
  );
}

export default App;
