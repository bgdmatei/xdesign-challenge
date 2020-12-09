import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Launch from '../components/Launch';
import Loader from '../components/Loader';
import LaunchHome from '../assets/images/launch-home@3x.png';

const LaunchesScreen = () => {
  const [loading, setLoading] = useState(true);
  const [launches, setLaunches] = useState([]);

  const API = 'https://api.spacexdata.com/v3/launches';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(API);
      setLaunches(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className='launches'>
          <div className='launches-info'>
            <img src={LaunchHome} alt='Rocket launching' />
            <Launch launches={launches} />
          </div>
        </section>
      )}
    </>
  );
};

export default LaunchesScreen;
