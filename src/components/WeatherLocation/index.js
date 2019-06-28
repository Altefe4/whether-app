import React, { Component }  from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css';
import transforWeather from './../../services/transformWeather';
import {api_weather } from './../../constants/api_url';

class WeatherLocation extends Component {
    
    constructor () {
        super();
        this.state = {
            city: 'Montevideo',
            data: null, 
        };
    }

    componentDidMount(prevProps, prevState){
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        fetch(api_weather).then((resolve => {
            return resolve.json()
        })).then(data => {
            const newWeather = transforWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            })
        });
    }

    render() {
        const {city, data} = this.state;
        return (
        <div className="weatherLocationCont">
            <Location city={city}></Location>
            {data ? <WeatherData data={data}></WeatherData> : <CircularProgress /> }
        </div>
    )};
}

export default WeatherLocation;