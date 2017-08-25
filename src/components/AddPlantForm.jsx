import React from 'react';
import styles from '../styles/App.css';
import PropTypes from 'prop-types';
import Moment from 'moment';
import PlantModel from '../models/PlantModel';

class AddPlantForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(e) {
    e.preventDefault();

    const {_plantName, _wateringInterval, _lastWatered} = this.refs;

    var newPlant = new PlantModel(_plantName.value, parseFloat(_wateringInterval.value), new Moment(_lastWatered.value).format());

    this.props.addNewPlantToList(newPlant);
  }

  render() {
    if (this.props.addPlantFormShowing) {
      return (
        <form className={styles.addPlantForm} onSubmit={this.handleFormSubmission}>
          <div className={styles.leftFormColumn}>
            <label htmlFor="plantName">Plant Name/Type:</label>
            <input type="text" placeholder="Tomato" name="plantName" ref="_plantName"/>
            <label htmlFor="wateringInterval">How often should it be watered (in hours)?</label>
            <input type="number" placeholder="8" name="wateringInterval" ref="_wateringInterval" step="0.01" />
          </div>
          <div className={styles.rightFormColumn}>
            <label htmlFor="lastWatered">When was it last watered:</label>
            <input type="datetime-local" name="lastWatered" ref="_lastWatered" />
            <button type="submit">Submit</button>
          </div>
        </form>
      );
    } else {
      return (null);
    }
  }
}

AddPlantForm.propTypes = {
  addPlantFormShowing: PropTypes.bool.isRequired,
  addNewPlantToList: PropTypes.func.isRequired,
};

export default AddPlantForm;
