// JavaScript Document
import React from 'react';


//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

//Images & Icons
import imgUrl from '../images/parkAbout.jpg';

//style
const useStyles = makeStyles(theme => ({
  about:{
	  padding:'6%',
	  color:'white',
	},
	contact:{
	  padding:'2%',

	  color:'#280004',
		textAlign:'center',
	},
	address:{
	  textAlign:'center',
	},
	sendUs:{
		paddingLeft:'3%',
	},
}));

//exporting class About
export default function About() {
  const classes = useStyles();
  return (
		<div>
			<Grid container>
				<Grid item xs={12} style={styles.container} className={classes.about}>
					<section>
	  					<h1>About Us</h1>
	  					<p>
	  					Epic cheeseburgers come in all kinds of manifestations, but we want them in and around our mouth no matter what. Slide those smashed patties with the gently caramelized meat fat between a toasted brioche bun and pass it over. You fall in love with the cheeseburger itself but the journey ain’t half bad either.<br /><br />

	  					They’re the childhood friend that knows your highest highs and lowest lows. They’ve been with you through thick and thin and they’re the best at keeping secrets. Whether it’s dressed up or informal, cheeseburgers have your back.<br /><br />

	  					Sometimes we lose sight of what really matters in life. There’s something to be said for a gourmet brie and truffle burger paired with parmesan frites, but don’t let that make you forget about the ol’ faithful with American cheddar and a squishy bun. Lettuce remind you that cheeseburgers come in all forms - bun intended.
	  					</p>
	  				</section>
				</Grid>
	  
				<Grid item xs={12} className={classes.contact}>
					<section>
	  					<Grid container>
	  
							<Grid item xs={12} md={3}>
	  							<h2>1-512-394-9384</h2>
	  								<p>Monday - Friday<br />
	  								8:00am -5:30pm CT
	  								</p>
	  						</Grid>
	  
	  						<Grid item xs={12} md={7} className={classes.address}>
	   							<h3>Parks2Go, Inc </h3>
	  								<address>
	  7256 Arugula Parkway, ste 101<br />
	  The Woodlands, TX 77380<br />
	  1-512-394-9384
	  								</address>
	  						</Grid>
	  
	  						<Grid item xs={12} md={2} className={classes.sendUs}>
	   							<Typography variant="body2" align="left">
      								<Link color="inherit" href="/"><h3>
	  									SEND US AN EMAIL
      								</h3></Link>{' '}
    							</Typography>
	  
	  					    </Grid>
	  					</Grid>
	  			   </section>
				</Grid>

			</Grid>
		</div>
    );
}
const styles ={
	container:{
		backgroundImage: 'url(' + imgUrl + ')',	
		backgroundColor:'rgba(24, 8, 0, 1)',
	}
}
