import React from 'react';
import PropTypes from 'prop-types';

function Timer(props) {
  return (
    <div>
      <span>Watering Interval: {props.wateringInterval}</span>
      <span>Last Watered: {props.lastWatering}</span>
    </div>
  );
}

Timer.propTypes = {
  wateringInterval: PropTypes.string.isRequired,
  lastWatering: PropTypes.string.isRequired,
};

export default Timer;
