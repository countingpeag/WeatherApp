import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { Weathers } from '../../constants/weathers';
import './styles.css';

const location = "Buenos Aires,AR";
const api_key = "1bdf69bbaa728155024a0cfce16224ee";
const api_weather = `https://samples.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

const data1 = {
    temperature: 20,
    weatherState: Weathers.SUN,
    humidity: 10,
    wind: '10 m/s'
};

class WeatherLocation1 extends Component{
    
    constructor(){
        super();
        this.state = {
            city: 'Mexico',
            data: data1
        };   
    }

    handleUpdateClick = () => {
        fetch(api_weather)
        /*this.setState({
            data: data2
        });*/
        console.log("Actualizado");
    }
    
    render(){
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
        
    };
}

export default WeatherLocation1;