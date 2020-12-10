import React, { useState } from 'react';
import moment from 'moment';
import Select from '../assets/images/select@2x.png';
import Sort from '../assets/images/sort@2x.png';

const Launch = ({ launches, setLaunches }) => {
  const [order, setOrder] = useState(false);
  const [sortedLaunches, setSortedLaunches] = useState([]);

  const sortbyDate = () => {
    const reversedLaunches = [...launches].reverse();
    let reversedSort = [];

    if (sortedLaunches.length) {
      reversedSort = sortedLaunches.reverse();
    }

    setLaunches(reversedLaunches);
    setSortedLaunches(reversedSort);
    setOrder(!order);
  };

  return (
    <>
      <div className='launch-list'>
        <div className='filter-btns'>
          <div>
            Filter by Year
            <span>
              <img src={Select} alt='selectIcon' />
            </span>
          </div>
          <div onClick={sortbyDate} className='sort-btn'>
            {order ? 'Sort Ascending' : 'Sort Descending'}
            <span>
              <img src={Sort} alt='sortIcon' />
            </span>
          </div>
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
