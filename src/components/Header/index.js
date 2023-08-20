import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="dis-flex">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        alt="wave"
        className="wave-logo"
      />
      <p className="paragraph-element">Wave</p>
    </div>
    <div className="dis-flex">
      <Link to="/">
        <p className="paragraph-element">Home</p>
      </Link>
      <Link to="/about">
        <p className="paragraph-element">About</p>
      </Link>
      <Link to="/contact">
        <p className="paragraph-element">Contact</p>
      </Link>
    </div>
  </div>
)

export default Header
