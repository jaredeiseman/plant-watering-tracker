import React from 'react';
import styles from '../styles/App.css';
import PropTypes from 'prop-types';

function FormToggleButton(props) {
  return (
    <button
      className={styles.formToggleButton}
      onClick={props.toggleAddPlantFormShowing}>Add a New Plant</button>
  );
}

FormToggleButton.propTypes = {
  toggleAddPlantFormShowing: PropTypes.func.isRequired,
};

export default FormToggleButton;
