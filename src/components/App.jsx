import React from 'react';
import styles from '../styles/App.css';
import PlantList from './PlantList';
import FormContainer from './FormContainer';

function App(){
  return (
    <div className={styles.app}>
      <h1>Da Nursery</h1>
      <FormContainer />
      {/*<PlantList />*/}
    </div>
  );
}

export default App;
