import convert from 'convert-units';
import { Weathers } from '../constants/weathers';

const getTemp = kelvin => {
    console.log(kelvin);
    return convert(kelvin).from('K').to('C');
}

const getWeatherState = weather => {
    return Weathers.SUN;
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(this.weather);
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