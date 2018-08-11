    import React from 'react';
    import PropTypes from 'prop-types';
    import WeatherLocation from './WeatherLocation';
    import './styles.css';

    const LocationList = ({ cities, onSelectedLocation }) => {
        
        const handleWeatherLocationClick = city => {
            //console.log("handleWeatherLocationClick");
            onSelectedLocation(city);
        }

        const stringToComponents = cities => (
            cities.map( city => 
                <WeatherLocation 
                    key={city} 
                    city={city} 
                    onWeatherLocationClick={() => handleWeatherLocationClick(city)} 
            />)
        );

        return (
            <div className="locationList">
                {stringToComponents(cities)}
            </div>
        );
    }

    LocationList.propTypes = {
        cities: PropTypes.array.isRequired,
        onSelectedLocation: PropTypes.func,
    }

    export default LocationList;