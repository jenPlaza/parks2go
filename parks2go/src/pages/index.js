// JavaScript Document
import React from 'react';
import ParkGridHome from '../components/grids/parkGridHome';
import States from '../components/USA_states/states';
import Map from '../pages/map'

//Material UI
import Grid from "@material-ui/core/Grid";

class Index extends React.Component {
	
	linkClick(event) {
	window.onclick= event => {
	 //console.log(event.target);
	 //console.log(event.target.id);
	  var targetId = event.target.id;
	  window.location.assign(`http://localhost:3000/stateActivities/${targetId}`);
	};
};
  render() {
    return(
    <div style={styles.container}>
      <Grid container >
	  		<Grid item xs={12} md={4}>
        		<ParkGridHome />
       		</Grid>
	  		<Grid item xs={12} md={8} style={styles.rightContainer}>
	  			<Grid container>
	  				<Grid item xs={12} style={styles.map}>
	  					<Map />
	  				</Grid>
      				<Grid item xs={12} >
	  					<States />
            		</Grid> 
        		</Grid>
	  		</Grid>
      	</Grid>
    </div>
  	);
  }
}

export default Index;
const styles ={
	container:{
		height:'auto',
		flexGrow: 1,
		overflow:'hidden',
		textAlign:'left',
	  marginBottom:'-3%',
	},
	rightContainer:{
		padding:'5%',
		marginTop:'-5%',
	},
	map:{
		textAlign:'center',
	},
}
