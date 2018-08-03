import convert from 'convert-units';
import { Weathers } from '../constants/weathers';

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C'));
}

const getWeatherState = weather => {
    const  { id } = weather[0];
    
    if(id<300)
        return Weathers.THUNDER;
    else if(id<400)
        return Weathers.DRIZZLE;
    else if(id<600)
        return Weathers.RAIN;
    else if(id<700)
        return Weathers.SNOW;
    else if(id===800)
        return Weathers.SUN;
    else
        return Weathers.CLOUDY

}

const transformWeather = weather_data => {
    const { weather } = weather_data;
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather);
    const temperature = getTemp(temp);

    const data = {
        humidity: humidity,
        temperature: temperature,
        weatherState: weatherState,
        wind: `${speed} m/s`
    };

    return data;
}

export default transformWeather;