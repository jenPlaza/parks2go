// JavaScript Document
import React from 'react';

//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";


//Smart Component
class StateActivities extends React.Component {
	//declaring state and new object
	state ={
		activityListing:[]
	}

//calling fetchData function
	componentDidMount(){
		this.fetchActivities();
}

//fetching API
fetchActivities(){
 fetch('https://developer.nps.gov/api/v1/parks?statecode=FL&limit=1&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq')
		.then(results =>{
		return results.json();
	}).then(data =>{
		let aList = data.data.map((use)=>{
			return(
				<div key={this.props.id}>
				<span key={use.results}>
				{use.activities.map(item =>{
				return(
				<Typography variant="body" align="left">
      			<Link color="inherit" href="/">
				<li>{item.name}</li>	
				</Link>{' '}
					</Typography>
					)
				})
				}
				</span>
				</div>
			)
		})
		this.setState({StateActivities:aList});
	})
}
	 render() { 
  return (
  <Grid container style={styles.container}>
	   <Grid item xs={12} md={2} style={styles.links}>
	  <Link />
	   </Grid>
	  {this.state.StateActivities}		
	  </Grid>
  );
 }
}
export default StateActivities

const styles ={
	container:{
		marginTop:'1%',
		border:'1px solid green',
	},
}

