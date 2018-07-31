import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const location = ({city}) => (
    <div className="LocationCont">
        <h1>{city}</h1>
    </div>
);

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default location;