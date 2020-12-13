import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Launch from '../components/Launch';
import Filter from '../components/Filter';
import Loader from '../components/Loader';
import launchHome from '../assets/images/launch-home.png';
import launchHome2x from '../assets/images/launch-home@2x.png';
import launchHome3x from '../assets/images/launch-home@3x.png';
import sort from '../assets/images/sort.png';
import sort2x from '../assets/images/sort@2x.png';
import sort3x from '../assets/images/sort@3x.png';

const API = 'https://api.spacexdata.com/v3/launches';
const sortOrder = { asc: 'asc', desc: 'desc' };

const filterLaunches = (launches, filter) => {
  const hasYearFilter = filter.year !== null;
  const isAscending = filter.order === sortOrder.asc;

  const filteredLaunches = hasYearFilter
    ? // given a year filter, actually filter, else do nothing
      launches.filter((launch) => launch.launch_year === filter.year)
    : launches;

  // given an order change, simply reverse the array
  return isAscending ? filteredLaunches : [...filteredLaunches].reverse();
};

const LaunchesScreen = ({ launches, setLaunches, loading, setLoading }) => {
  const [filter, setFilter] = useState({ year: null, order: sortOrder.desc });

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
    setFilter((prev) => ({ ...prev, year: year === 'All' ? null : year }));
  };

  const onSortOrderChange = () => {
    setFilter((prev) => ({
      ...prev,
      order: prev.order === sortOrder.asc ? sortOrder.desc : sortOrder.asc,
    }));
  };

  const filteredLaunches = filterLaunches(launches, filter);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section>
          <div className='launches-info'>
            <img
              src={launchHome}
              srcSet={`${launchHome} 300w, ${launchHome2x} 768w, ${launchHome3x} 1240w`}
              alt='Rocket launch'
            />
            <div className='launch-list'>
              <div className='filter-sort-btns'>
                <Filter launches={launches} onYearChange={onYearChange} />
                <button
                  type='button'
                  onClick={onSortOrderChange}
                  className='sort-btn'
                >
                  Sort {filter.order === 'asc' ? 'Descending' : 'Ascending'}
                  <span>
                    <img
                      src={sort}
                      srcSet={`${sort} 300w, ${sort2x} 768w, ${sort3x} 1240w`}
                      alt='selectIcon'
                    />
                  </span>
                </button>
              </div>
              {filteredLaunches.map((launch) => (
                <Launch
                  {...launch}
                  key={`${launch.flight_number}${launch.launch_date_unix}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LaunchesScreen;
