// JavaScript Document
import React from 'react';

//Material UI
import Box from '@material-ui/core/Box';
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
		imageListing: []
	}

parkClick(event) {
	window.onclick= event => {
		//console.log(event.target);
		//console.log(event.target.id);
		
		var parkId = event.target.id;
		window.location.assign(`http://localhost:3000/Park/${parkId}`);
	};
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
				
				<Box key={i}>
				<img id={use.parkCode} src={use.images[0].url} alt={use.images[0].altText} style={{width:'100%'}} onClick={this.parkClick}/>
				<h2 style={styles.h2}><b>{use.name}</b></h2>
				<h5 style={styles.h5}>{use.addresses[0].city}, {use.addresses[0].stateCode}</h5>
				</Box>
				
			)
		})
		
		this.setState({ParkGridHome:mList});
	})
}
	 render() { 
  return (
  <Grid container style={styles.container}>
	  <Grid item xs={12} md={5}>
	  <li style={styles.indImgs}> 
	  <Box />
	  </li>
	  </Grid>
	  {this.state.ParkGridHome}		
	  </Grid>
  );
 }
}
export default ParkGridHome

const styles ={
	h1:{
		textAlign:'center',
		fontSize:'3em',
		color: theme.palette.secondary.main
	},
	indImgs:{
	listStyleType:'none',
	},
	h2:{
		marginTop:'-15%',
		paddingLeft:'1%',
		color:'white',
	},
	h5:{
		marginTop:'-6%',
		paddingLeft:'1%',
		color:'white',
	},
}