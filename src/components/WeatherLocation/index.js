import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import './styles.css';

const api_key = "1bdf69bbaa728155024a0cfce16224ee";
const url = "http://api.openweathermap.org/data/2.5/weather";

class WeatherLocation extends Component{
    
    constructor({ city }){
        super();
        this.state = {
            city: city,
            data: null
        };   
    }

    componentWillMount(){
        this.handleUpdateClick();
    }

    componentDidMount(){
        //console.log("ComponentDidMount");
    }

    componentWillUpdate(){
        //console.log("ComponentWillUpdate");
    }

    componentDidUpdate(){
        //console.log("ComponentDidUptade");
    }
    
    handleUpdateClick = () => {
        
        const api_weather = `${url}?q=${this.state.city}&APPID=${api_key}`;
        fetch(api_weather)
        .then( data => {
            return data.json();
        })
        .then(weather_data => {
            //debugger;
            const data = transformWeather(weather_data);
            this.setState({data: data});
            
        });
    }
    
    render(){
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}/>
                {data ? <WeatherData data={data}/> : <CircularProgress />}
            </div>
        );
        
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
}

export default WeatherLocation;