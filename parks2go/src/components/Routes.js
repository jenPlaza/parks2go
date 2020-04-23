import React from 'react';
//React Router
import{ Route, Switch } from 'react-router-dom'
//pages
import About from '../pages/About'
import Map from '../pages/Map'
import ParkGridHome from '../pages/ParkGridHome'
import ParkGridStateParks from '../pages/ParkGridStateParks'
import StateParks from '../pages/StateParks'
import ImgGallery from '../pages/ImgGallery';
import Park from '../pages/Park'

//exporting class Routes
export default function Routes() {
  return (
		<div>
				<Switch>
	  				<Route exact path='/' component={Map} />
					<Route exact path='/About' component={About} />
	  				<Route exact path='/parkGridHome' component={ParkGridHome} />
	  				<Route exact path='/Park' component={Park} />
						<Route exact path='/ParkGridStateParks' component={ParkGridStateParks} />
						{ /*
							SB Added this as a "route param" demo
							<Route exact path='/stateParks/:stateCode' component={StateParks} />
						*/}
	  				<Route exact path='/StateParks' component={StateParks} />
	  				<Route exact path='/ImgGallery' component={ImgGallery} />
				</Switch>
			</div>
    );
}
