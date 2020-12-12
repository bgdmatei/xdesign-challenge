import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Launch from '../components/Launch';
import Loader from '../components/Loader';
import LaunchHome from '../assets/images/launch-home@3x.png';

const LaunchesScreen = ({ launches, setLaunches, loading, setLoading }) => {
  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const API = 'https://api.spacexdata.com/v3/launches';

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await axios.get(API);
      setLaunches(result.data);
      setLoading(false);
    };
    fetchData();
  }, [setLaunches, setLoading]);

  const onYearChange = (year) => {
    let allLaunches = [...launches];
    let filteredLaunches;
    filteredLaunches = allLaunches.filter(
      (launch) => launch.launch_year === year
    );

    setLaunches(filteredLaunches);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className='launches'>
          <div className='launches-info'>
            <img src={LaunchHome} alt='Rocket launch' />
            <Launch
              launches={launches}
              setLaunches={setLaunches}
              onYearChange={onYearChange}
              filteredLaunches={filteredLaunches}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default LaunchesScreen;
