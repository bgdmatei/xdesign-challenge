import React from 'react';

const Launch = ({ launches }) => {
  return (
    <div>
      <ul>
        <li>
          {launches &&
            launches.map((launch, i) => {
              return <h2>launch.links.name</h2>;
            })}
        </li>
      </ul>
    </div>
  );
};

export default Launch;
