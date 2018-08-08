import React from 'react';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';

const cities = ['Bogotá, col', 'Culiacan, MX', 'Zapopan, MX'];

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      city: null,
    }
  }

  handleSelectedLocation = city => {
    //console.log(`handleSelectedLocation ${city}`);
    this.setState({city});
  }

  render() {
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar position="static">
              <Toolbar variant="dense">
                <IconButton color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                  weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div className="detail">
              {
                city!==null &&
                <ForecastExtended city={city} />
              }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
