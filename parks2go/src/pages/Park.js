// JavaScript Document
import React from 'react';
//import Fetch from '../components/Fetch';

//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";

//Images & Icons
import imgUrl from '../images/parkBackground.jpg';
import img from '../images/placeholder.jpg';

import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
	  typography: {
    fontFamily: 'Lora',
  },
	palette: {
    primary: {
      light: '#B9B9B9',
      main: '#000000',
    },
    secondary: {
      main: '#ea7a0f',
      contrastText: '#ffffff',
    },
  },
});

//Smart Component
class Park extends React.Component {
	//declaring state and new object
	state ={
		parkListing: []
	}

//calling fetchData function
	componentDidMount(){
	this.fetchData();
}

//fetch Api data and map json results in a list format
	/*fetchData(){

	fetch('https://developer.nps.gov/api/v1/parks?parkCode=afam&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq')
		.then(results =>{
		return results.json();
	}).then(data =>{
		
		let mList = data.data.map((use)=>{
			return(
				<div key={this.props.id}>
				<span key={use.results}>
				<img src={use.images[0].url} alt={use.images[0].altText} width="400" height="200"/>
				<h2>{use.name}</h2>
				<h3>{use.addresses[0].city}, {use.addresses[0].stateCode}</h3>
				<p><b>Park Details</b><br />
					    Cost:{use.entranceFees[0].cost},<br />
					    Description: {use.entranceFees[0].description},<br />
					    Title: {use.entranceFees[0].title}</p>
				<p><b>Park Description</b><br /> {use.description}</p>
				<p><b>Park Activities</b>
					{use.activities.map(item =>{
						return(
							<div>{item.name}</div>	
								)
							})
						}
					</p>
				<p><b>Park Info</b><br /> {use.directionsInfo}</p>
				<p><b>For More Directions</b><br />
				<Link href='{use.directionsUrl}'>{use.directionsUrl}</Link><br /><br /><br /><br /><br /></p>
				</span>
				</div>
			)
		})

		this.setState({park:mList});
	})
}*/
fetchData(){

}
	 render() { 
  return (
	  <div style={styles.container}>
		<Grid container style={styles.container}>
	  	<Grid item xs={12} md={7} style={styles.leftCol}>
		  	<Grid container>
	  			<Grid item xs={12} md={11} style={styles.images}>
		  <img src={img} alt='park image' style={{width: '95%', borderRadius: 50, padding: '2%'}}/>
	   			</Grid> 
	 			<Grid item xs={12} md={11} style={styles.moreImages}>
		  <img src={img} alt='park image' style={{width: 130, height: 130, borderRadius: 130/ 2, padding: '1%'}}/>
			 <img src={img} alt='park image' style={{width: 130, height: 130, borderRadius: 130/ 2, padding: '1%'}}/>
				  <img src={img} alt='park image' style={{width: 130, height: 130, borderRadius: 130/ 2, padding: '1%'}}/>
					  <img src={img} alt='park image' style={{width: 130, height: 130, borderRadius: 130/ 2, padding: '1%'}}/>
	   			</Grid>
				<Grid item xs={12} style={styles.activities}>
		  <p><b>Park Activities</b></p>

					<ul>
						<li>Astronomy</li>
						<li>Birdwatching</li>
						<li>Boating</li>
						<li>Bookstore and Park Store</li>
						<li>Camping</li>
						<li>Fishing</li>
						<li>Guided Tours</li>
						<li>Junior Ranger Program</li>
						<li>Paddling</li>
						<li>SCUBA Diving</li>
						<li>Shopping</li>
						<li>Snorkeling</li>
						<li>Stargazing</li>
						<li>Swimming</li>
						<li>Wildlife Watching</li>
						</ul>

	   			</Grid> 
	 			<Grid item xs={12} style={styles.topics}>
		  				<p><b>Park Topics</b><br /></p>
	<ul>
						<li>Astronomy</li>
						<li>Birdwatching</li>
						<li>Boating</li>
	</ul>
	   			</Grid>
			</Grid>  
	   	</Grid> 
	 	<Grid item xs={12} md={4}style={styles.rightCol}>
		  	<Grid container>
	  			<Grid item xs={12} style={styles.h2}>
		  			<h2>Park</h2>
	   			</Grid> 
	 			<Grid item xs={12} style={styles.details}>
		  			<p><b>Park Details</b><br />
					    Cost:XXXXXXX,<br />
					    Description: Chicory flavour mocha cultivar sugar doppio breve body americano macchiato. Wings caramelization, beans grinder aftertaste irish con panna milk café au lait spoon acerbic. Redeye café au lait body aftertaste milk fair trade mocha robust.,<br />
					    Title: Title</p>
	   			</Grid>
				<Grid item xs={12} style={styles.description}>
		  				<p><b>Park Description</b><br /> Aromatic galão aroma milk aged, single shot, crema whipped spoon, grinder sweet single shot breve trifecta, mazagran fair trade, cappuccino foam breve crema seasonal americano. Decaffeinated kopi-luwak milk trifecta con panna americano, filter that, flavour that sweet roast trifecta arabica. Foam, java brewed, whipped strong skinny, pumpkin spice, froth, chicory filter caramelization extra, decaffeinated qui, strong dripper acerbic, medium pumpkin spice shop sweet aromatic. </p>
	   			</Grid> 
	 			<Grid item xs={12} style={styles.directions}>
		  				<a>Directions</a>
	   			</Grid>
				<Grid item xs={12} style={styles.buttons}>
		  				<button >Print</button>
						<button >Save</button>
	   			</Grid> 
			</Grid>  
	   	</Grid>
	</Grid>  
	  {this.state.park}
		</div>			
  	);
  }
}

export default Park

const styles ={
	container:{
		marginTop:'1%',
		border:'1px solid red',
		backgroundImage: 'url(' + imgUrl + ')',	
	},
	images:{
backgroundColor:'#313638',
		
	},
	moreImages:{
backgroundColor:'#313638',
		padding:'2%',
		borderTopRightRadius:'50',
		borderBottomRightRadius:'50',
	},
rightCol:{
	color:'white',
},
	leftCol:{
	color:'white',
}
}

