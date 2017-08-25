import React from 'react';
import FormToggleButton from './FormToggleButton';
import AddPlantForm from './AddPlantForm';
import styles from '../styles/App.css';

function FormContainer() {
  return (
    <div className={styles.formContainer}>
      <FormToggleButton />
      <AddPlantForm />
    </div>
  );
}

export default FormContainer;
