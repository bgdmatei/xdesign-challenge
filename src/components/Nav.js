import React from 'react';
import axios from 'axios';
import Logo from '../assets/images/spacex-logo.png';
import refresh from '../assets/images/refresh.png';
import refresh2x from '../assets/images/refresh@2x.png';
import refresh3x from '../assets/images/refresh@3x.png';

const Nav = ({ setLaunches, setLoading }) => {
  const API = 'https://api.spacexdata.com/v3/launches';

  const getNewData = async () => {
    setLoading(true);
    const result = await axios.get(API);
    setLaunches(result.data);
    setLoading(false);
  };

  return (
    <nav>
      <div className='logo-container'>
        <img src={Logo} alt='SpaceX Logo' />
        <span>Launches</span>
      </div>
      <button className='reload-btn' onClick={getNewData}>
        Reload Data
        <span>
          {' '}
          <img
            src={refresh}
            srcSet={`${refresh} 300w, ${refresh2x} 768w, ${refresh3x} 1240w`}
            alt='refreshIcon'
          />
        </span>
      </button>
    </nav>
  );
};

export default Nav;
