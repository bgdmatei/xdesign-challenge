import React, { useState } from 'react';
import sortIcon from '../assets/images/sort@2x.png';

const Sort = ({ launches, setLaunches }) => {
  const [order, setOrder] = useState(false);
  const [sortedLaunches, setSortedLaunches] = useState([]);

  const handleSortByDate = () => {
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
    <div onClick={handleSortByDate} className='sort-btn'>
      Sort {order ? 'Ascending' : 'Descending'}
      <span>
        <img src={sortIcon} alt='sortIcon' />
      </span>
    </div>
  );
};

export default Sort;
