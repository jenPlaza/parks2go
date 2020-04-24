// JavaScript Document
import React from 'react';

//Material UI
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";

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

const endpoint = 'limit=4';

//Smart Component
class ParkGridHome extends React.Component {
	//declaring state and new object
	state ={
		parkListing: []
	}

//calling fetchData function
	componentDidMount(){
	this.fetchData();
}

//fetching API
 fetchData(){
	fetch(`https://developer.nps.gov/api/v1/parks?${endpoint}&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq`)
		.then(results =>{
		return results.json();
	}).then(data =>{
		
		let mList = data.data.map((use, i)=>{
			return(
			 <li key={i} style={styles.indImgs}> 
      			<Link color="inherit" href="/">
					<img src={use.images[0].url} alt={use.images[0].altText} style={{width: '100%'}}/>
				</Link>
			  </li>
			)
		})
		
		this.setState({ParkGridHome:mList});
	})
}
	 render() { 
  return (
  <Grid container style={styles.container}>
	  <Grid item xs={12} md={6}>
	  <Link />
	  </Grid>
	  {this.state.ParkGridHome}		
	  </Grid>
  );
 }
}
export default ParkGridHome

const styles ={
	container:{
		marginTop:'1%',
	},
	h1:{
		textAlign:'center',
		fontSize:'3em',
		color: theme.palette.secondary.main
	},
	indImgs:{
	listStyleType:'none',
	},
}