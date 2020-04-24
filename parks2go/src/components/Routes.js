import React from 'react';
//React Router
import{ Route, Switch } from 'react-router-dom'
//pages
import Home from '../pages/Home'
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
	  				<Route exact path='/' component={Home} />
					<Route exact path='/About' component={About} />
	  				<Route exact path='/parkGridHome' component={ParkGridHome} />
	  				<Route exact path='/Map' component={Map} />
	  				
					<Route exact path='/ParkGridStateParks' component={ParkGridStateParks} />
	  				//<Route exact path='/StateParks' component={StateParks} />
					{ 
					//SB Added this as a "route param" demo
					<Route exact path='/stateParks/:targetId' component={StateParks} />
					}
	  				<Route exact path='/Park' component={Park} />
	  				<Route exact path='/Park/:parkId' component={Park} />
	  				<Route exact path='/ImgGallery' component={ImgGallery} />
				</Switch>
			</div>
    );
}
