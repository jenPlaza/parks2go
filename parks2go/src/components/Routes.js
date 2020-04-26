import React from 'react';
//React Router
import{ Route, Switch } from 'react-router-dom'
//pages
import Home from '../pages/index'
import About from '../pages/about'
import Map from '../pages/map'
import ParkGridHome from '../components/grids/parkGridHome'
import ParkGridStateParks from '../components/grids/parkGridStateParks'
import StateActivities from '../pages/stateActivities'
import StateParks from '../pages/stateParks'
import Park from '../pages/park'

//exporting class Routes
export default function Routes() {
  return (
		<div>
				<Switch>
	  				<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
	  				<Route exact path='/parkGridHome' component={ParkGridHome} />
	  				<Route exact path='/map' component={Map} />
	  				
					<Route exact path='/parkGridStateParks' component={ParkGridStateParks} />
	  				<Route exact path='/stateActivities' component={StateActivities} />
					{ 
					//SB Added this as a "route param" demo
					<Route exact path='/stateActivities/:targetId' component={StateActivities} />
					}
	  //<Route exact path='/stateActivities/:activity' component={StateActivities} />
	  				<Route exact path='/stateParks' component={StateParks} />
	  				<Route exact path='/stateParks/:targetId' component={StateParks} />
	  				<Route exact path='/park' component={Park} />
	  				<Route exact path='/park/:parkId' component={Park} />
				</Switch>
			</div>
    );
}
