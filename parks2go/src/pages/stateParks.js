// JavaScript Document
import React from 'react';
import Inprogress from '../components/progress_indicator/inProgress'

//Material UI
import {withStyles} from '@material-ui/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = {
root:{
	direction:'row',
	flexGrow:'1',
	},
container:{
    display: 'flex',
	 flexWrap: 'wrap',
	justifyContent: 'space-around',
	overflow: 'hidden',
	},
gridList: {
	paddingBottom:'0.2%',
  },
paper: { 
    textAlign: 'center',
		width:'400px',
		height: '300px',
		//backgroundColor: 'rgb(15,15,15,0.4)',
		listStyleType:'none',
		backgroundColor:'white',
  },
indImgs:{
	height: '100%',
	width:'100%',
	},
};

//console.log(window.location.pathname);
let stCode = window.location.pathname;
let newStC = stCode.split('/');
//console.log(newStC);

var actCd = newStC.slice(3);
//console.log(actCd);

var stateCd = newStC.slice(2,3);
//console.log(stateCd);

const activityId = actCd;
const targetId = stateCd;
const endpoint = `statecode=${targetId}`;

//Smart Component
class StateParks extends React.Component {
	//declaring state and new object
	state ={
		picListing: []
	}

parkClick(event) {
	window.onclick= event => {
		//console.log(event.target);
		
		var parkId = event.target.id;
		window.location.assign(`http://localhost:3000/park/${parkId}`);
	};
} 

//calling fetchData function
	componentDidMount(){
	this.fetchData();
}

filterByActivity(current_value, i){
			
			for(let i=0; i< current_value.activities.length;i++ ) {
				let activity = current_value.activities[i];
				if(activity.id ==='7CE6E935-F839-4FEC-A63E-052B1DEF39D2')
					return true;
			}
			//console.log(current_value);
		return false;
}

//fetching API
 fetchData(){
	 
	fetch(`https://developer.nps.gov/api/v1/parks?${endpoint}&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq`)
		.then(results =>{
		return results.json();
	}).then(data =>{
		
		let filteredArray = data.data.filter(this.filterByActivity);
		
		let mList = data.data.map((use, i)=>{
			const  {classes}  = this.props;
			return(
				<GridList key={i} style={styles.gridList}>
				<GridListTile style={styles.paper}>
				<img id={use.parkCode} src={use.images[0].url} alt={use.images[0].altText} style={styles.indImgs} onClick={this.parkClick}/>
				<GridListTileBar title={use.images[0].title} subtitle={<span>{use.addresses[0].city}, {use.addresses[0].stateCode}</span>} />
				</GridListTile>	
				</GridList>
			)
		})
		
		this.setState({StateParks:mList});
	})
}
	 render(props) { 
		const  {classes}  = this.props; 
  return (
	  <div style={styles.root}>
      <Grid container style={styles.container}>
	  <Inprogress />
	  		{this.state.StateParks}
     </Grid>
    </div>
  );
 }
}
export default StateParks
//export default withStyles(useStyles)(StateParks);

const styles ={
root:{
	direction:'row',
	flexGrow:'1',
	},
container:{
    display: 'flex',
	 flexWrap: 'wrap',
	justifyContent: 'space-around',
	overflow: 'hidden',
	},
gridList: {
	paddingBottom:'0.2%',
  },
paper: { 
    textAlign: 'center',
		width:'400px',
		height: '300px',
		//backgroundColor: 'rgb(15,15,15,0.4)',
		listStyleType:'none',
		backgroundColor:'white',
  },
indImgs:{
	height: '100%',
	width:'100%',
	},
}