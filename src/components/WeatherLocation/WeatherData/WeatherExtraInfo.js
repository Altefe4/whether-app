import React from 'react'
import PropTypes from 'prop-types';
import './styles.css'

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity}% - `}</span>
        <span className="extraInfoText">{`Vientos: ${wind} wind`}</span>
    </div>
);

WeatherExtraInfo.protoTypes = {
    humidity : PropTypes.string.isRequired,
}

export default WeatherExtraInfo;