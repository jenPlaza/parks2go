import React from 'react';
//React Router
import{ Route, Switch } from 'react-router-dom'
//pages
import Main from '../pages/Main'

//exporting class Routes
export default function Routes() {
  return (
		<div>
				<Switch>
	  				<Route exact path='/' component={Main} />
					<Route exact path='/Main' component={Main} />
				</Switch>
			</div>
    );
}
