import React from 'react';
import Timer from './Timer';
import WaterDeleteButtons from './WaterDeleteButtons';
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
          nextWatering={props.childPlant.nextWatering} />
        <WaterDeleteButtons
          waterPlant={props.waterPlant}
          childPlant={props.childPlant}
          deletePlant={props.deletePlant} />
      </div>
    </div>
  );
}

Plant.propTypes = {
  childPlant: PropTypes.instanceOf(PlantModel).isRequired,
  waterPlant: PropTypes.func.isRequired,
  deletePlant: PropTypes.func.isRequired,
};

export default Plant;
