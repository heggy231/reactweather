// 1) import `{ useState, useEffect }`
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// 2) refactor class to functional with use of hook
const App = () => {
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

class App extends React.Component {
  state = { 
    lat: null, 
    errorMessage: '' 
  };

// componentDidMount() only gets called once
  componentDidMount() {
    // console.log('My component was rendered to the screen.');
    
  }

  componentDidUpdate() {
    console.log('My component was just updated - it re-rendered!');
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message="Please accept location request"/>;
  }


  // React requires we have to define render method!! return JSX
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));