// JavaScript Document
import React from 'react';
//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";

//Images & Icons
import image from '../images/placeholder.jpg'

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
class Parks extends React.Component {
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
	fetch('https://developer.nps.gov/api/v1/parks?limit=6&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq')
		.then(results =>{
		return results.json();
	}).then(data =>{
		
		let mList = data.data.map((use)=>{
			return(
				
			  <li key={this.props.id}>
				<span key={use.results}>  
     <Typography variant="body" align="left">
      	<Link color="inherit" href="/">
		<img src={use.images[0].url} alt={use.images[0].altText} width="300" height="200"/>
</Link>{' '}
</Typography>
	
				</span>
				</li>
			)
		})
		
		this.setState({parks:mList});
	})
}
	 render() { 
  return (
  <Grid container style={styles.container}>

	  <Grid item xs={12} md={6} style={styles.links}>
		<Link />
	  <Link />
	  <Link />
	  </Grid>
	   <Grid item xs={12} md={6} style={styles.links}>
	  <Link />
	  <Link />
	  <Link />
	   </Grid>
	  {this.state.parks}		
	  </Grid>
   
  );
 }
}
export default Parks

const styles ={
	container:{
		marginTop:'1%',
		border:'1px solid red',
	},
	h1:{
		textAlign:'center',
		fontSize:'3em',
		color: theme.palette.secondary.main
		
	},
	pImg:{
		textAlign:'right',
		width:'100%',
	},
	proImg:{
		textAlign:'right',
		marginTop:'1%',
	},
	proInfo:{
		marginTop:'-1%',
		textAlign:'left',
		color:theme.palette.secondary.main,
		paddingBottom:'5%',
	},
}

