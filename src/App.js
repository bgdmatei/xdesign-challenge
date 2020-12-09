import React, { useState } from 'react';
import Nav from './components/Nav';
import LaunchesScreen from './screens/LaunchesScreen';

const App = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <>
      <main>
        <Nav setLaunches={setLaunches} setLoading={setLoading} />
        <LaunchesScreen
          launches={launches}
          setLaunches={setLaunches}
          loading={loading}
          setLoading={setLoading}
        />
      </main>
    </>
  );
};

export default App;
