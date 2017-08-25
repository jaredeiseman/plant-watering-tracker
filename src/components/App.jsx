import React from 'react';
import styles from '../styles/App.css';
import PlantList from './PlantList';
import FormContainer from './FormContainer';
import PlantModel from '../models/PlantModel';
import Moment from 'moment';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      plantList: [
        new PlantModel('tomato', 24, new Moment().format()),
        new PlantModel('fern', 1, new Moment().format()),
        new PlantModel('venus flytrap', 24, new Moment().format()),
      ],
      addPlantFormShowing: false
    };

    this.toggleAddPlantFormShowing = this.toggleAddPlantFormShowing.bind(this);
    this.addNewPlantToList = this.addNewPlantToList.bind(this);
    this.waterPlant = this.waterPlant.bind(this);
  }

  componentDidMount() {
    this.updateTimers();
    this.timerStartedChecker = setInterval(() =>
      this.updateTimers(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerStartedChecker);
  }

  toggleAddPlantFormShowing() {
    this.setState({addPlantFormShowing: !this.state.addPlantFormShowing});
  }

  addNewPlantToList(newPlant) {
    var newPlantList = this.state.plantList.slice();
    newPlantList.push(newPlant);
    this.setState({plantList: newPlantList});
  }

  updateTimers() {
    var newPlantList = this.state.plantList.slice();
    newPlantList.forEach((plant) => {
      plant.updateNextWateringTime();
    });
    this.setState({plantList: newPlantList});
  }

  waterPlant(wateredPlant) {
    wateredPlant.lastWatering = new Moment().format();
    var newState = this.state.plantList.slice();
    newState = newState.map((plant) => {
      if ((plant.name === wateredPlant.name) && (plant.wateringInterval === wateredPlant.wateringInterval)) {
        return wateredPlant;
      } else {
        return plant;
      }
    });
    this.setState({plantList: newState});
    this.updateTimers();
  }

  render() {

    return (
      <div className={styles.app}>
        <h1>Da Nursery</h1>
        <FormContainer
          addPlantFormShowing={this.state.addPlantFormShowing}
          toggleAddPlantFormShowing={this.toggleAddPlantFormShowing}
          addNewPlantToList={this.addNewPlantToList} />
        <PlantList childPlantList={this.state.plantList}
          waterPlant={this.waterPlant}/>
      </div>
    );
  }
}

export default App;
