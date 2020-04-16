import React from 'react';
//React Router
import{ Route, Switch } from 'react-router-dom'
//pages
import Main from '../pages/Main'
import Map from '../pages/Map'

//exporting class Routes
export default function Routes() {
  return (
		<div>
				<Switch>
	  				<Route exact path='/' component={Map} />
					
				</Switch>
			</div>
    );
}
