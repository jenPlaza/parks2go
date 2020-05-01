import React from 'react';
import USAMap from "react-usa-map";
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
map:{
		textAlign:'center',
	},
}));

export default function Map() {
	  const classes = useStyles();
	
	 const mapHandler = (event) => {
	  var targetId = event.target.dataset.name;
	  window.location.assign(`http://localhost:3000/stateActivities/${targetId}`);
  };
	
    return (
      <div className={classes.map}>
        <USAMap onClick={mapHandler} width={'100%'}/>
      </div>
    );
}