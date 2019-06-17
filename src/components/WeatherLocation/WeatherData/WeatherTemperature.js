import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weathers'
import './styles.css'

const icons = {
    [SUN]: "day-sunny",
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = "4x";
    

    if (icon)
       return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
    else   
        return <WeatherIcons name={"day-sunny"} size="2x" />
}

const WeatherTemperatura = ({temperature,weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeatherTemperatura.propTypes = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired,
};

export default WeatherTemperatura;