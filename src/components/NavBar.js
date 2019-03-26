import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import './NavBar.scss';

const Navbar = () => {
  return (
    <React.Fragment>

      <ul id="dropdown1" className="dropdown-content">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Home</Link></li>
        <li className="divider"></li>
        <li><Link to="/">Home</Link></li>
      </ul>

      <nav className="indigo lighten-2">

        <SideBar />

        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Learning React</Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-me">About Me</Link></li>
            <li>
              <a className="dropdown-trigger" 
                 href="#!" 
                 data-target="dropdown1">
                  Dropdown
                <i className="material-icons right">
                  arrow_drop_down
                </i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar;


