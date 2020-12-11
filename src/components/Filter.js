import React, { useState } from 'react';
import selectIcon from '../assets/images/select@2x.png';

const Filter = ({ launches, onLaunchYearChange }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (e) => {
    const value = e.target.textContent;
    onLaunchYearChange(value);
  };

  const years = [...new Set(launches.map((launch) => launch.launch_year))];

  return (
    <>
      <div className='filter-btn' onClick={handleOpen}>
        Filter by Year
        <span>
          <img src={selectIcon} alt='selectIcon' />
        </span>
        <div className={open ? 'filter-options-open' : 'filter-options'}>
          <ul>
            {years.map((year) => (
              <li onClick={handleSelect} key={year}>
                {year}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter;
