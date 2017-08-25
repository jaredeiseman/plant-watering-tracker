import React from 'react';
import PropTypes from 'prop-types';
// import Moment from 'moment';

function Timer(props) {
  return (
    <div>
      <span style={{display: 'block'}}>Watering Interval: {props.wateringInterval} Hours</span>
      <span>Should be watered {props.nextWatering}</span>
    </div>
  );
}

Timer.propTypes = {
  wateringInterval: PropTypes.number.isRequired,
  nextWatering: PropTypes.string.isRequired,
};

export default Timer;
