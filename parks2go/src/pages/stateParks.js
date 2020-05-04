// JavaScript Document
import React from 'react';
import Inprogress from '../components/progress_indicator/inProgress'

//Material UI
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

let stCode = window.location.pathname;
let newStC = stCode.split('/');
console.log(newStC)
var actCd = newStC.slice(3);
console.log(actCd)
var stateCd = newStC.slice(2,3);
console.log(stateCd)
const activityId = actCd;
const targetId = stateCd;
const endpoint = `statecode=${targetId}`;

//Smart Component
class StateParks extends React.Component {
	//declaring state and new object
	state ={
		picListing: [],
		isLoading: false,
	}

parkClick(event) {
	window.onclick= event => {
		//console.log(event.target);
		
		var parkId = event.target.id;
		window.location.assign(`https://jenplaza.github.io/parks2go/park/${parkId}`);
	};
} 

//calling fetchData function
	componentDidMount(){
	this.fetchData();
}

filterByActivity(current_value, i){
			
			for(let i=0; i< current_value.activities.length;i++ ) {
				let activity = current_value.activities[i];
				if(activity.id === `${activityId}`)
					return true;
			}
		return false;
}

//fetching API
 fetchData(){
	this.setState({ isLoading: true }, () => {
fetch(`https://developer.nps.gov/api/v1/parks?${endpoint}&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq`)
		.then(results =>{
		return results.json();
	}).then(data =>{this.setState({
				isLoading:false,
				data:data.data
			})
		
		let filteredArray = data.data.filter(this.filterByActivity);
		
		let mList = filteredArray.map((use, i)=>{
			return(
				<GridList key={i} style={styles.gridList}>
				<GridListTile style={styles.paper}>
				<img id={use.parkCode} src={use.images[0].url} alt={use.images[0].altText}  onClick={this.parkClick}/>
				<GridListTileBar title={use.images[0].title} subtitle={<span>{use.addresses[0].city}, {use.addresses[0].stateCode}</span>} />
				</GridListTile>	
				</GridList>
			)
		})
			this.setState({StateParks:mList});
		})
	})
}
	 render() { 
		  const { isLoading } = this.state;  
		 if(isLoading)
		 {return <Inprogress />}
		 
  return (
	  <div>
      <Grid container style={styles.container}>
	  	{this.state.StateParks}
     </Grid>
    </div>
  );
 }
}
export default StateParks;

const styles = {
	container:{
		justifyContent:'center'
	},
gridList: {
	padding:'0.1%',
  },
paper: { 
		width:'428px',
		height: '328px',
		listStyleType:'none',
		backgroundColor:'white',
},
}