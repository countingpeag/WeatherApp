import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = ['Bogotá, col', 'Culiacan, MX', 'Zapopan, MX'];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}/>
      </div>
    );
  }
}

export default App;
