import React from 'react';
import LocationList from './components/LocationList';
//import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';

const cities = ['Bogotá, col', 'Culiacan, MX', 'Zapopan, MX'];

class App extends React.Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }

  render() {
    return (

      /*<Grid fluid>
        <Row center="xs">
          <Col xs={12} sm={6} md={4} lg={3}>
            <div>Suspendisse potenti. Nulla nec orci nec mauris faucibus sagittis. Sed auctor nunc non velit faucibus pulvinar. Suspendisse id nisi faucibus, laoreet ipsum at, aliquam eros. Nam sagittis eros sed laoreet venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eros nunc, malesuada ac vulputate eget, ornare et arcu. Vivamus quis porta mauris. Aliquam erat volutpat. Nullam fermentum nisl at lacinia commodo.</div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div>Suspendisse potenti. Nulla nec orci nec mauris faucibus sagittis. Sed auctor nunc non velit faucibus pulvinar. Suspendisse id nisi faucibus, laoreet ipsum at, aliquam eros. Nam sagittis eros sed laoreet venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eros nunc, malesuada ac vulputate eget, ornare et arcu. Vivamus quis porta mauris. Aliquam erat volutpat. Nullam fermentum nisl at lacinia commodo.</div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div>Suspendisse potenti. Nulla nec orci nec mauris faucibus sagittis. Sed auctor nunc non velit faucibus pulvinar. Suspendisse id nisi faucibus, laoreet ipsum at, aliquam eros. Nam sagittis eros sed laoreet venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eros nunc, malesuada ac vulputate eget, ornare et arcu. Vivamus quis porta mauris. Aliquam erat volutpat. Nullam fermentum nisl at lacinia commodo.</div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <div>Suspendisse potenti. Nulla nec orci nec mauris faucibus sagittis. Sed auctor nunc non velit faucibus pulvinar. Suspendisse id nisi faucibus, laoreet ipsum at, aliquam eros. Nam sagittis eros sed laoreet venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eros nunc, malesuada ac vulputate eget, ornare et arcu. Vivamus quis porta mauris. Aliquam erat volutpat. Nullam fermentum nisl at lacinia commodo.</div>
          </Col>
        </Row>
      </Grid>*/
      <div className="App">
        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
      </div>
    );
  }
}

export default App;
