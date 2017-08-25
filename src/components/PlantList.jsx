import React from 'react';
import Plant from './Plant';
import styles from '../styles/App.css';
import PropTypes from 'prop-types';
import Moment from 'moment';

function PlantList(props) {
  var toDisplay = props.childPlantList.sort((a,b) => {
    var first = new Moment(a.lastWatering);
    var second = new Moment(b.lastWatering);
    if (first.isBefore(second)) {
      return -1;
    } else if (first.isAfter(second)) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <div className={styles.plantList}>
      {props.childPlantList.map((plant, index) =>
        <Plant childPlant={plant}
          key={index}
          waterPlant={props.waterPlant}
          deletePlant={props.deletePlant} />
      )}
    </div>
  );
}

PlantList.propTypes = {
  childPlantList: PropTypes.array.isRequired,
  waterPlant: PropTypes.func.isRequired,
  deletePlant: PropTypes.func.isRequired,
};

export default PlantList;
