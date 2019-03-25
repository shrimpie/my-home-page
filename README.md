// "start": "./node_modules/.bin/serve -s build -l 8081",



<div>
  <ul id="dropdown1" className="dropdown-content">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/">Home</Link></li>
    <li className="divider"></li>
    <li><Link to="/">Home</Link></li>
  </ul>
  <nav className="blue">
    <div className="nav-wrapper">
      <Link to="/">Zhenyu Yang | React</Link>
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
</div>



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


<ul id="dropdown1" className="dropdown-content">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/">Home</Link></li>
  <li className="divider"></li>
  <li><Link to="/">Home</Link></li>
</ul>



