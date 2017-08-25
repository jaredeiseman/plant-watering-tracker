import React from 'react';
import styles from '../styles/App.css';
import PropTypes from 'prop-types';
import PlantModel from '../models/PlantModel';

class WaterDeleteButtons extends React.Component {
  constructor(props) {
    super(props);

    this.handleWaterPlantClicked = this.handleWaterPlantClicked.bind(this);
    this.handleDeletePlantClicked = this.handleDeletePlantClicked.bind(this);
  }

  handleWaterPlantClicked() {
    this.props.waterPlant(this.props.childPlant);
  }

  handleDeletePlantClicked() {
    this.props.deletePlant(this.props.childPlant);
  }

  render() {
    return (
      <div className={styles.waterDeleteButtons}>
        <button onClick={this.handleWaterPlantClicked}>Water</button>
        <button onClick={this.handleDeletePlantClicked}
          className={styles.deleteButton}>Delete</button>
      </div>
    );
  }
}

WaterDeleteButtons.propTypes = {
  waterPlant: PropTypes.func.isRequired,
  childPlant: PropTypes.instanceOf(PlantModel).isRequired,
  deletePlant: PropTypes.func.isRequired,
};

export default WaterDeleteButtons;
