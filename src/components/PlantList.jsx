import React from 'react';
import Plant from './Plant';
import styles from '../styles/App.css';
import PropTypes from 'prop-types';

function PlantList(props) {
  return (
    <div className={styles.plantList}>
      {props.childPlantList.map((plant, index) =>
        <Plant childPlant={plant} key={index} />
      )}
    </div>
  );
}

PlantList.propTypes = {
  childPlantList: PropTypes.array.isRequired
};

export default PlantList;
