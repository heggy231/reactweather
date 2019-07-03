import { useState, useEffect } from 'react';

export default () => {
  // const [lat, setLat] : first val value of the state property
  //  second is function that we can use to change that value
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // 3) replace lifecycle componentDidMount with useEffect with empty array at the end since componentDidMount gets called only once!
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude), 
      err => setErrorMessage(err.message)
    );
  }, []); // run useEffect() once during total lifecycle of this component

  // we want our ouput tobe `lat`, `errorMessage`
  return [lat, errorMessage];
};