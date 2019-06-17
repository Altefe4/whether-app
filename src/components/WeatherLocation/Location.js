import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

//Si yo agrego un componente con return puedo devolver muchas etiquetas html.
// Pero debeo encerrar el componente con {}
const Location = ({ city }) => {
    //Destructuring 
    //const { city:ciudad } = props;
    return (
        <div className="locationCont">
            <h1>{city}</h1>
        </div>
    )
};

Location.protoTypes = {
    city : PropTypes.string.isRequired,
};

export default Location;