import React from 'react';
import Launch from '../components/Launch';
import LaunchHome from '../assets/images/launch-home@3x.png';
import '../assets/styles/launches.scss';

const LaunchesScreen = () => {
  return (
    <>
      <section className='launches'>
        <div className='launches-info'>
          <img src={LaunchHome} alt='Rocket lauching' />
          <Launch />
        </div>
      </section>
    </>
  );
};

export default LaunchesScreen;
