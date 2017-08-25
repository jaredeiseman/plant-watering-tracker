import React from 'react';
import styles from '../styles/App.css';
import PlantList from './PlantList';
import FormContainer from './FormContainer';

function App(){
  return (
    <div className={styles.app}>
      <PlantList />
      <FormContainer />
    </div>
  );
}

export default App;
