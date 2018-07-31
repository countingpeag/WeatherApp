import React from 'react';
import  WeatherIcons from 'react-weathericons';
import { Weathers } from '../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const getIconeName = weatherState => {
    switch(weatherState){
        case Weathers.CLOUD:
            return 'cloud';
        case Weathers.CLOUDY:
            return 'cloudy';
        case Weathers.SUN:
            return 'day-sunny';
        case Weathers.RAIN:
            return 'rain';
        case Weathers.SNOW:
            return 'snow';
        case Weathers.WINDY:
            return 'windy';
        default:
            return 'meteor';
    }
};

const WeatherTemperature = ({ temperature = 0, weatherState }) => (
    <div className="weatherTemperatureCont">
        {<WeatherIcons className="wicon" name={getIconeName(weatherState)} size="3x" />}
        <span className="temperature">{` ${temperature} `}</span>
        <span className="temperaturetype">C°</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
};
export default WeatherTemperature;