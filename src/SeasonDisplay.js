import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {

  summer: {
    text: 'Lets hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'snowflake'
  }
};

// Expand to spring and fall 
// Add time of day as color

const getSeason = (lat, month) => {
  // [months 3-8] northern > winter, southern > summer, we are in summer months 3-9
  if (month > 2 && month < 9) {
    // if we are in southern lat > 0 return 'summer'; otherwise, lat < 0 (northern) winter
    return lat > 0 ? 'summer' : 'winter';
  } else {
    // [months 1-2, 9-12], 1st find if we are in southern (lat > 0) return 'winter'; otherwise, we are in northern (lat < 0) return 'summer'
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  // lat={this.state.lat}
  const month = new Date().getMonth();
  const season = getSeason(props.lat, month);
  // seasonConfig["season"] >>> { text, iconName }
  // {text: "hot time", iconName: "sun"}  
  // https://www.sitepoint.com/es6-enhanced-object-literals/ 
  // Destructuring (var from obj prop)
  // var text = seaconConfig["summer"]["text"]
  const { text, iconName } = seasonConfig[season];  // seasonConfig["summer"] >> text = 'Lets hit the beach', iconName = 'sun'
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );


};

export default SeasonDisplay;