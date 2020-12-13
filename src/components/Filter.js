import React, { useState } from 'react';
import select from '../assets/images/select.png';
import select2x from '../assets/images/select@2x.png';
import select3x from '../assets/images/select@3x.png';

const Filter = ({ onYearChange, launches }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (e) => {
    const value = e.target.textContent;
    onYearChange(value);
    setOpen(!open);
  };

  const years = [
    'All',
    ...new Set(launches.map((launch) => launch.launch_year)),
  ];

  return (
    <>
      <button className='filter-btn' onClick={handleOpen}>
        Filter by Year
        <span>
          <img
            src={select}
            srcSet={`${select} 300w, ${select2x} 768w, ${select3x} 1240w`}
            alt='selectIcon'
          />
        </span>
      </button>
      {open && (
        <ul className='filter-options-open'>
          {years.map((year) => (
            <li onClick={handleSelect} key={year}>
              {year}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Filter;
