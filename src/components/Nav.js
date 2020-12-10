import React from 'react';
import axios from 'axios';
import Logo from '../assets/images/spacex-logo.png';
import Refresh from '../assets/images/refresh@3x.png';

const Nav = ({ setLaunches, setLoading }) => {
  const API = 'https://api.spacexdata.com/v3/launches';

  const getNewData = async () => {
    setLoading(true);
    const result = await axios.get(API);
    setLaunches(result.data);
    setLoading(false);
  };

  return (
    <div className='nav-container'>
      <nav>
        <div className='logo-container'>
          <img src={Logo} alt='SpaceX Logo' />
          <span>Launches</span>
        </div>
        <div className='reload-btn' onClick={getNewData}>
          Reload Data
          <span>
            {' '}
            <img src={Refresh} alt='refreshIcon' />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
