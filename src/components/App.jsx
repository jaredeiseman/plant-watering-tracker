import React from 'react';
import styles from '../styles/App.css';
import PlantList from './PlantList';
import FormContainer from './FormContainer';
import PlantModel from '../models/PlantModel';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      plantList: [
        new PlantModel('tomato', '1d', '8h'),
        new PlantModel('fern', '1d', '4h'),
        new PlantModel('venus flytrap', '1d', '17h'),
      ]
    };
  }

  render() {

    return (
      <div className={styles.app}>
        <h1>Da Nursery</h1>
        <FormContainer />
        <PlantList childPlantList={this.state.plantList}/>
      </div>
    );
  }
}

export default App;
