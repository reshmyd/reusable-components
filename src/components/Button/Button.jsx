import './Button.scss'

const Button = ({ isSecondary, handleClick, text }) => {

  const style = isSecondary ? "secondaryBtn" : ""
  
  return (
    <button className={style} onClick={handleClick}>{text}</button>
    
  )
}

export default Button
