
import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';

const SideBar = () => {

	return (
    <React.Fragment>
  		<ul id="slide-out" className="sidenav show-on-med-and-down">
        <li>
          <div className="user-view">
            <div className="background">
              <img src="images/office.jpg" alt="background" />
            </div>
            <Link to="/">
              <img className="circle" src="images/me.png" alt="me" />
            </Link>
            <a href="/">
              <span className="white-text name">Zhenyu Yang</span>
            </a>
            <a href="https://github.com/shrimpie" target="_blank"
               rel="noopener noreferrer">
              <span className="white-text github">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/zhenyu-yang-150638133/" 
               target="_blank" rel="noopener noreferrer">
              <span className="white-text linkedin">LinkedIn</span>
            </a>
            <Link to="/">
              <span className="white-text email">andyoungnyc@gmail.com</span>
            </Link>
          </div>
        </li>

        <li>
          <Link to="/"><i className="material-icons">home</i>Home</Link>
        </li>
        <li>
          <Link to="/about-me">
            <i className="material-icons">person</i>About Me
          </Link>
        </li>
        <li><div className="divider"></div></li>
        <li><a href="#!" className="subheader">Projects</a></li>
        <li>
          <Link to="/api-example" className="waves-effect">
            API example
          </Link>
        </li>
        <li>
          <Link to="/meeting-example" className="waves-effect">
            Meeting example
          </Link>
        </li>
      </ul>
      <a href="#!" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
    </React.Fragment>
	)
}

export default SideBar;
