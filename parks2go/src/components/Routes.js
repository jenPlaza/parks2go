import React from 'react';
//React Router
import {
    BrowserRouter as Router,Route,Switch,} from 'react-router-dom';

//pages
import Home from '../pages/index'
import About from '../pages/about'
import StateActivities from '../pages/stateActivities'
import StateParks from '../pages/stateParks'
import Park from '../pages/park'

//exporting class Routes
export default function Routes() {
  return (
		<Router>
				<Switch>
	  				<Route exact path= {process.env.PUBLIC_URL + '/'} component={Home} />
					<Route exact path= {process.env.PUBLIC_URL + '/about'} component={About} />
					{/*SB Added this as a "route param" demo*/}
					<Route exact path= {process.env.PUBLIC_URL + '/stateActivities/:targetId'} component={StateActivities} />
	  				<Route exact path= {process.env.PUBLIC_URL + '/stateParks/:targetId/:activity'} component={StateParks} />
	  				<Route exact path= {process.env.PUBLIC_URL + '/park/:parkId'} component={Park} />
	  				
				</Switch>
    </Router>
    );
}
