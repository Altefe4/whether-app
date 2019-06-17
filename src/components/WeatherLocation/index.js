import React, { Component }  from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css';


import {
    WINDY,
} from './../../constants/weathers'

const location = "Montevideo,uy"
const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d"
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`

const data = {
    temperature: 5,
    weatherState: WINDY,
    humidity: 10,
    wind: `10 m/s`,
}

class WeatherLocation extends Component {
    
    constructor () {
        super();
        this.state = {
            city: 'Montevideo',
            data: data, 
        };
    }

    getWeatherState = weather_data => {
        return WINDY;
    }

    getData = weather_data => {
        const {humidity, temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState  = WINDY;

        const data = {
            temperature: temp,
            weatherState,
            humidity,
            wind: `${speed} m/s`,
        }

        return data;
    }

    handleUpdateClick = () => {
        fetch(api_weather)
        .then((resolve => {
            console.log(resolve);
            return resolve.json()
        })).then(data => {
            const newWeather = this.getData(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            })
        });

        console.log("Actualizar")
        this.setState({
            city : "Peñarol"
        })
    }

    render() {
        const {city, data} = this.state;
        return (
        <div className="weatherLocationCont">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
    )};
}

export default WeatherLocation;