import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import './styles.css';

const location = "Guadalajara Metropolitan Area, MX";
const api_key = "1bdf69bbaa728155024a0cfce16224ee";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${api_key}`;

class WeatherLocation1 extends Component{
    
    constructor(){
        super();
        this.state = {
            city: 'Guadalajara, MX',
            data: null
        };   
        //console.log("Contructor");
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

export default WeatherLocation1;