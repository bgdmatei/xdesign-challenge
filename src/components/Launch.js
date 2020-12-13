import React, { memo } from 'react';
import moment from 'moment';

const Launch = memo(
  ({
    flight_number,
    mission_name,
    launch_date_utc,
    rocket: { rocket_name },
  }) => {
    return (
      <div className='launch-item'>
        <div className='launch-name'>
          <p>#{flight_number}</p>
          <h2>{mission_name}</h2>
        </div>
        <div className='launch-info'>
          <p>{moment(launch_date_utc).format('Do MMM YYYY')}</p>
          <h3>{rocket_name}</h3>
        </div>
      </div>
    );
  }
);

export default Launch;
