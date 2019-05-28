import React, { Component } from 'react';
import { Link } from "gatsby";

import './style.scss';
import logo from '../images/logo-fokus.png';


class Navigation extends Component {

  state = {
    toggleMenu: false
  }

  toggleMenuHandler = () => ( this.setState({ toggleMenu: !this.state.toggleMenu }))

  render(){
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/"
              className="navbar-item"
            >
              <img src={logo} alt="logo-fokus" />
            </Link>
            
            <a role="button" className="navbar-burger burger" onClick={this.toggleMenuHandler}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.toggleMenu ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link to="/" className="navbar-item">
                Početna
              </Link>

              <Link to="/o-nama" className="navbar-item">
                O nama
              </Link>
        
              <Link to="/cenovnik" className="navbar-item">
                Cenovnik
              </Link>

              <a href="tel:+38136204020" className="navbar-item navbar-phone">
                +381 36 20 40 20
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navigation;