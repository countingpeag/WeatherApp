    import React from 'react';
    import PropTypes from 'prop-types';
    import WeatherLocation from './WeatherLocation';
  
    const stringToComponents = cities => (
    cities.map( city => <WeatherLocation key={city} city={city}/>)
    );

    const LocationList = ({cities}) => (
        <div>
            {stringToComponents(cities)}
        </div>
    )

    LocationList.propTypes = {
        cities: PropTypes.array.isRequired,
    }

    export default LocationList;