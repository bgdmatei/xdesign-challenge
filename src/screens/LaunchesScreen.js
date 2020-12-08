import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Launch from '../components/Launch';
import LaunchHome from '../assets/images/launch-home@3x.png';
import '../assets/styles/launches.scss';

const LaunchesScreen = () => {
  const [launches, setLaunches] = useState([]);

  const API = 'https://api.spacexdata.com/v3/launches';

  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        console.log(res);
        setLaunches(res.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <section className='launches'>
        <div className='launches-info'>
          <img src={LaunchHome} alt='Rocket lauching' />
          <Launch launches={launches} />
        </div>
      </section>
    </>
  );
};

export default LaunchesScreen;
