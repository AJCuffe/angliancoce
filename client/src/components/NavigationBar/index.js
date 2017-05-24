import React from 'react';
import { NavLink } from 'react-router-dom'

class NavigationBar extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <NavLink to="/" className="navbar-brand">COCE Panel</NavLink>
                </div>
                <div id="navbar" className="navbar-collapse collapse navbar-right">
                  <ul className="nav navbar-nav">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/coce">COCE Members</NavLink></li>
                    <li><NavLink to="/bench">Bench</NavLink></li>
                    <li><NavLink to="/opp">Opportunities</NavLink></li>
                  </ul>
                </div>
              </div>
            </nav>
    );
  }
}

export default NavigationBar;
