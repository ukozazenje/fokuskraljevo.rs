import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';

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
            <a
              className="navbar-item"
              href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
            >
              <img src={logo} alt="logo-fokus" />
            </a>
            <a role="button" className="navbar-burger burger" onClick={this.toggleMenuHandler}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.toggleMenu ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <a className="navbar-item">
                Početna
              </a>

              <a className="navbar-item">
                O nama
              </a>
        
              <a className="navbar-item">
                Cenovnik
              </a>

              <a className="navbar-item navbar-phone">
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