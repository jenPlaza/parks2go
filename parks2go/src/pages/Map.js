import React, { Component } from 'react';
import StateParks from './StateParks';

//Material UI
import USAMap from "react-usa-map";

class Map extends Component {
	
  mapHandler = (event) => {
	  var targetId = event.target.dataset.name;
	  window.location.assign(`http://localhost:3000/StateParks/${targetId}`);
  };
  render() {
    return (
      <div>
        <USAMap onClick={this.mapHandler}/>
      </div>
    );
  }
}
export default Map;