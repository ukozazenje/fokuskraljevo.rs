import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';
import logo from '../images/logo-fokus.png';


const Navigation = () => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
					<a
						className="navbar-item"
						href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
					>
						<img src={logo} alt="logo-fokus" />
					</a>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
				</div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">
              Pocetna
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

export default Navigation;