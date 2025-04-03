// src/Components/NavBarSidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.module.scss';

const NavBarSidebar = () => {
  const location = useLocation();

  const getActiveLink = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className='w-full '>


    <nav className=" ">
      <ul>
        <li>
          <Link to="/" className={getActiveLink('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className={getActiveLink('/services')}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/projects" className={getActiveLink('/projects')}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className={getActiveLink('/contact')}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default NavBarSidebar;