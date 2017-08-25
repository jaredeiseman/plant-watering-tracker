import React from 'react';
import styles from '../styles/App.css';
import PropTypes from 'prop-types';

function AddPlantForm(props) {
  if (props.addPlantFormShowing) {
    return (
      <form className={styles.addPlantForm}>
        <div className={styles.leftFormColumn}>
          <label htmlFor="plantName">Plant Name/Type:</label>
          <input type="text" placeholder="Tomato" name="plantName" />
          <label htmlFor="wateringInterval">How often should it be watered?</label>
          <select name="wateringInterval">
            <option value="4h">4 Hours</option>
            <option value="8h">8 Hours</option>
            <option value="12h">12 Hours</option>
            <option value="1d">Once a day</option>
            <option value="2d">Once every 2 days</option>
            <option value="3d">Once every 3 days</option>
            <option value="4d">Once every 4 days</option>
            <option value="5d">Once every 5 days</option>
            <option value="6d">Once every 6 days</option>
            <option value="1w">Once a week</option>
            <option value="2w">Once every 2 weeks</option>
            <option value="3w">Once every 3 weeks</option>
            <option value="4w">Once a month</option>
          </select>
        </div>
        <div className={styles.rightFormColumn}>
          <label htmlFor="lastWatered">When was it last watered:</label>
          <input type="datetime-local" />
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  } else {
    return (null);
  }
}

AddPlantForm.propTypes = {
  addPlantFormShowing: PropTypes.bool.isRequired
};

export default AddPlantForm;
