import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCityActionCreator } from '../actions';
import LocationList from '../components/LocationList';

class LocationListContainer extends Component{

    handleSelectedLocation = city => {
        this.props.setCity(city);
        //store.dispatch(setCity(city));
    }

    render(){
        return(
            <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectedLocation} />
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
}

const mapDispatchToProps = dispatch => (
    {
        setCity: value => dispatch(setCityActionCreator(value))
    }
);

export default connect(null, mapDispatchToProps)(LocationListContainer);