import React from 'react';
//React Router
import{ Route, Switch } from 'react-router-dom'
//pages
import Main from '../pages/Main'
import About from '../pages/About'
import Map from '../pages/Map'
import Parks from '../pages/Parks'

//exporting class Routes
export default function Routes() {
  return (
		<div>
				<Switch>
	  				<Route exact path='/' component={Map} />
					<Route exact path='/About' component={About} />
	  				<Route exact path='/Parks' component={Parks} />
				</Switch>
			</div>
    );
}
