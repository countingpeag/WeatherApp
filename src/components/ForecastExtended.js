import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class ForecastExtended extends Component{

    render(){
        const { city } = this.props;
        return(
            <div className='forecast-title'>
                <h2>Pronóstico Extendido para {city}</h2>
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;