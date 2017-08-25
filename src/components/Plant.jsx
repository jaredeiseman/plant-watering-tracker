import React from 'react';
import Timer from './Timer';
import WaterButton from './WaterButton';
import PropTypes from 'prop-types';
import PlantModel from '../models/PlantModel';
import styles from '../styles/App.css';

function Plant(props) {
  return (
    <div>
      <div className={styles.plant}>
        <p>{props.childPlant.name}</p>
        <Timer
          wateringInterval={props.childPlant.wateringInterval}
          lastWatering={props.childPlant.lastWatering} />
        <WaterButton />
      </div>
    </div>
  );
}

Plant.propTypes = {
  childPlant: PropTypes.instanceOf(PlantModel).isRequired
};

export default Plant;
