import './Nav.scss'
import NavItem from '../NavItem/NavItem'
import Button from '../Button/Button'

const Nav = () => {
  return (
    <nav>
      <div className='logo'>
      {/* <i className="fa-solid fa-lightbulb-on"></i> */}
        Knowaste
      </div>
      <div className="navItem">
        <NavItem text="How it works?" />
        <NavItem text="Admin" />
        <Button text="Login" />
      </div>

    </nav>
  )
}

export default Nav

