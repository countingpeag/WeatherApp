import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformcast from '../services/transformForecast';
import './styles.css';

/*const days = ['Lunes','Martes','Miercoles','Jueves', 'Viernes'];
const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normañ',
    wind: 'normal'
};*/
const api_key = "1bdf69bbaa728155024a0cfce16224ee";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{

    constructor(){
        super();
        this.state = {
                forecastData: null,
        };
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps !== this.props.city)
        {
            console.log(nextProps, "-->>");
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${city}&APPID=${api_key}`;

        fetch(url_forecast).then( data  => (
            data.json()
        )).then( weather_data => {
            console.log(weather_data);
            const forecastData = transformcast(weather_data);
            console.log(forecastData);
            this.setState({ forecastData });
            }
        );
    } 

    renderForcastItemDays(forecastData){
        return forecastData.map( forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekday={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}
            />
        ));
    }

    renderProgress(){
        return <h3>Cargando Pronóstico Extendido...</h3>;
    }

    render(){
        const { city } = this.props;
        const { forecastData } = this.state;
        return(
            <div className='forecast-title'>
                <h2>Pronóstico Extendido para {city}</h2>
                { forecastData ? this.renderForcastItemDays(forecastData) : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;