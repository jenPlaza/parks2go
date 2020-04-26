import React from 'react';

//Material UI
import USAMap from "react-usa-map";

class Map extends React.Component {
	
  mapHandler = (event) => {
	  var targetId = event.target.dataset.name;
	  window.location.assign(`http://localhost:3000/stateActivities/${targetId}`);
  };
  render() {
    return (
      <div>
        <USAMap onClick={this.mapHandler} width={'108%'}/>
      </div>
    );
  }
}
export default Map;