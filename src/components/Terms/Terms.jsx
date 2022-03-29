import './Terms.scss'
import Button from '../Button/Button'

const Terms = ({goBack, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className="termsForm">
      <h3>Our Terms & Conditions</h3>
      <div className='terms'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <br></br>
        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className="checkbox">
        <input type="checkbox" /> 
        <p>By ticking this box, you have acknowledged that you have read and agree to our terms and conditions.</p>
      </div>
      <div className="checkbox">
        <input type="checkbox" /> 
        <p>Opt-in to receive emails regarding any further announcements or inforamtion regarding new features or Knowwaste products.</p>
      </div>
      <div>
        <Button text="Previous" handleClick={goBack} isSecondary />
        <Button text="Create Account" />
      </div>
    </form>
  )
}

export default Terms