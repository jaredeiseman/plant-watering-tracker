import React from 'react';
import FormToggleButton from './FormToggleButton';
import AddPlantForm from './AddPlantForm';
import styles from '../styles/App.css';
import PropTypes from 'prop-types';

function FormContainer(props) {
  return (
    <div className={styles.formContainer}>
      <FormToggleButton toggleAddPlantFormShowing={props.toggleAddPlantFormShowing} />
      <AddPlantForm addPlantFormShowing={props.addPlantFormShowing}
        addNewPlantToList={props.addNewPlantToList}
        toggleAddPlantFormShowing={props.toggleAddPlantFormShowing} />
    </div>
  );
}

FormContainer.propTypes = {
  addPlantFormShowing: PropTypes.bool.isRequired,
  toggleAddPlantFormShowing: PropTypes.func.isRequired,
  addNewPlantToList: PropTypes.func.isRequired,
};

export default FormContainer;
