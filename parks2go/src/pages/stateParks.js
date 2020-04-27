// JavaScript Document
import React from 'react';

//Material UI
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';

//console.log(window.location.pathname);
let sCode = window.location.pathname;
 let newSC = sCode.split('/stateParks/');
 newSC.shift();
const parkId = newSC;

const activity = 'artsandculture'
const targetId = newSC;
const endpoint = `stateCode=${targetId}`;

//Smart Component
class StateParks extends React.Component {
	//declaring state and new object
	state ={
		picListing: []
	}

parkClick(event) {
	window.onclick= event => {
		//console.log(event.target);
		//console.log(event.target.id);
		
		var parkId = event.target.id;
		window.location.assign(`http://localhost:3000/park/${parkId}`);
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
				<div>
				<img id={use.parkCode} src={use.images[0].url} alt={use.images[0].altText} style={styles.indImgs} onClick={this.parkClick}/>
				<h2 style={styles.h2}><b>{use.name}</b></h2>
				<h5 style={styles.h5}>{use.addresses[0].city}, {use.addresses[0].stateCode}</h5>
				</div>
				</Box>
			)
		})
		
		this.setState({StateParks:mList});
	})
}
	 render() { 
  return (
	  <Grid container>
	   <Grid item xs={12}style={styles.item}>
	{this.state.StateParks}
	  </Grid>
       </Grid>		
  );
 }
}
export default StateParks

const styles ={
	item:{
	columns:'3',
		margin:'1%'
	},
	li:{
	listStyleType:'none',	
	},
	indImgs:{
	height: '100%',
	width:'100%',
		marginBottom:'10%',
	},
	h2:{
		marginTop:'-20%',
		paddingLeft:'3%',
		color:'white',
	},
	h5:{
		marginTop:'-6%',
		paddingLeft:'3%',
		color:'white',
	},
}