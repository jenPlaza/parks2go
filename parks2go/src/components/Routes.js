import React from 'react';
//React Router
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
//pages
import Home from '../pages/index'
import About from '../pages/about'
//import Map from '../components/map/map'
//import ParkGridHome from '../components/grids/parkGridHome'
//import ParkGridStateActivities from '../components/grids/parkGridStateActivities'
import StateActivities from '../pages/stateActivities'
import StateParks from '../pages/stateParks'
import Park from '../pages/park'

//exporting class Routes
export default function Routes() {
  return (
		<Router>
				<Switch>
	  				<Route exact path= {process.env.PUBLIC_URL + '/parks2go'} component={Home} />
					<Route exact path= {process.env.PUBLIC_URL + '/parks2go/about' component={About} />
					{/*SB Added this as a "route param" demo*/}
					<Route exact path= {process.env.PUBLIC_URL + '/parks2go/stateActivities/:targetId'} component={StateActivities} />
	  				<Route exact path= {process.env.PUBLIC_URL + '/parks2go/stateParks/:targetId/:activity'} component={StateParks} />
	  				<Route exact path= {process.env.PUBLIC_URL + '/parks2go/park/:parkId'} component={Park} />
	  
	  				{/*<Route exact path='/stateActivities/:activity' component={StateActivities} />
					<Route exact path='/parkGridStateActivities' component={ParkGridStateActivities} />
					<Route exact path='/map' component={Map} />
					<Route exact path='/parkGridHome' component={ParkGridHome} />
	  				<Route exact path='/stateParks' component={StateParks} />
	  				<Route exact path='/park' component={Park} />*/}
	  				
				</Switch>
    </Router>
    );
}
