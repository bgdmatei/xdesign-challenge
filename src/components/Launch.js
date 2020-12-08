import React from 'react';
import moment from 'moment';
import '../assets/styles/launch.scss';

const Launch = ({ launches }) => {
  return (
    <div className='launch-list'>
      {launches.map((launch, i) => (
        <div className='launch-item' key={i}>
          <div className='launch-name'>
            <p>#{i + 1}</p>
            <h2>{launch.mission_name}</h2>
          </div>
          <div className='launch-info'>
            <p>{moment.utc(launch.launch_date_utc).format('Do MMM YYYY')}</p>
            <h3>{launch.rocket.rocket_name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Launch;
