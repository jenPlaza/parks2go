import React from 'react';

//Material UI
import USAMap from "react-usa-map";
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
map:{
		justifyContent: 'space-around',
	},
}));

export default function Map() {
	  const classes = useStyles();
	
	 const mapHandler = (event) => {
	  var targetId = event.target.dataset.name;
	  window.location.assign(`https://jenplaza.github.io/parks2go/stateActivities/${targetId}`);
  };
	
    return (
      <div className={classes.map}>
        <USAMap onClick={mapHandler} width={'104%'}/>
      </div>
    );
}