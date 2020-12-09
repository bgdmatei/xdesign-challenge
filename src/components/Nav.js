import React from 'react';
import Logo from '../assets/images/spacex-logo.png';
import Refresh from '../assets/images/refresh@3x.png';

const Nav = () => {
  return (
    <div className='nav-container'>
      <nav>
        <div className='logo-container'>
          <img src={Logo} alt='SpaceX Logo' />
          <span>Launches</span>
        </div>
        <div className='reload-btn'>
          Reload Data
          <span>
            {' '}
            <img src={Refresh} alt='refresh icon' />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
