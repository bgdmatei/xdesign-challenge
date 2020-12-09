import React from 'react';
import moment from 'moment';
import Select from '../assets/images/select@2x.png';
import Sort from '../assets/images/sort@2x.png';

const Launch = ({ launches }) => {
  return (
    <>
      <div className='launch-list'>
        <div className='filter-btns'>
          <div>
            <p>Filter by Year</p>{' '}
            <span>
              {' '}
              <img src={Select} alt='' />{' '}
            </span>
          </div>
          <div>
            <p>Sort Descending</p>{' '}
            <span>
              <img src={Sort} alt='' />{' '}
            </span>
          </div>
        </div>
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
    </>
  );
};

export default Launch;
