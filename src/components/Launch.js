import React, { useState } from 'react';
import moment from 'moment';
import Filter from './Filter';
import Sort from './Sort';

const Launch = ({ launches, setLaunches }) => {
  const [onLaunchYearChange, setOnLaunchYearChange] = useState('');

  const results = (year) => {
    setOnLaunchYearChange(
      launches.filter((launch) => launch.launch_year.includes(year))
    );
  };

  return (
    <>
      <div className='launch-list'>
        <div className='filter-btns'>
          <Filter
            launches={launches}
            onLaunchYearChange={(year) => {
              setLaunches(results(year));
            }}
          />
          <Sort launches={launches} setLaunches={setLaunches} />
        </div>
        {launches.map((launch, i) => (
          <div className='launch-item' key={i}>
            <div className='launch-name'>
              <p>#{launch.flight_number}</p>
              <h2>{launch.mission_name}</h2>
            </div>
            <div className='launch-info'>
              <p>{moment.utc(launch.launch_date_utc).format('Do MMM YYYY')}</p>
              <h3>{launch.rocket.rocket_name}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Launch;
