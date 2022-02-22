import React from 'react';
import Login from './Login';

function Home() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1>Welcome to the Fitness Tracker</h1>
        <br />
        <p>
          This app is used for users to login, view, and create records that
          represent their health metrics on a given day.
        </p>
        <p>
          At the moment, the app only records height and weight. Further updates
          will be determined in the near future.
        </p>
      </div>
    </div>
  );
}

export default Home;
