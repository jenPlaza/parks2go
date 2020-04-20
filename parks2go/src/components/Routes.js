import React from 'react';
//React Router
import{ Route, Switch } from 'react-router-dom'
//pages
import Main from '../pages/Main'
import About from '../pages/About'
import Map from '../pages/Map'
import Parks from '../pages/Parks'
import StateParks from '../pages/stateParks'
import StateActivities from '../pages/stateActivities'
import Park from '../pages/Park'

//exporting class Routes
export default function Routes() {
  return (
		<div>
				<Switch>
	  				<Route exact path='/' component={Map} />
					<Route exact path='/About' component={About} />
	  				<Route exact path='/Parks' component={Parks} />
	  				<Route exact path='/Park' component={Park} />
	  				<Route exact path='/stateParks' component={StateParks} />
	  				<Route exact path='/stateActivities' component={StateActivities} />
				</Switch>
			</div>
    );
}
