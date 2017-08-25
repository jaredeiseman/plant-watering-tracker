import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Timer(props) {
  return (
    <div>
      <span>Watering Interval: {props.wateringInterval} Hours</span>
      <span>Last Watered: {new Moment(props.lastWatering).format()}</span>
    </div>
  );
}

Timer.propTypes = {
  wateringInterval: PropTypes.number.isRequired,
  lastWatering: PropTypes.string.isRequired,
};

export default Timer;
