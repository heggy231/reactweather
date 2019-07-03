// 1) import `{ useState, useEffect }`
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

// 2) refactor class to functional with use of hook
const App = () => {
  const [lat, errorMessage] = useLocation();
  
  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request"/>;
  }

  return <div className="border red">{content}</div>
};

ReactDOM.render(<App />, document.querySelector('#root'));