// JavaScript Document
import React from 'react';
import ParkGridStateActivities from '../components/grids/parkGridStateActivities';
import Inprogress from '../components/progress_indicator/inProgress'

//Material UI
import {withStyles} from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
container:{
	justifyContent:'space-around',
	padding:'4%',
	marginBottom:'5%',
	columns:'2 auto',
	[theme.breakpoints.up('md')]: {
		columns:'6 auto',
    	marginTop: '-1%',
		marginBottom:'0%',
	},
	[theme.breakpoints.up('lg')]: {
    	marginTop: '0%',
		fontSize:'1.25em',
	},
	},
ul:{
	margin:0,
	padding:0,
	},
li:{
	color:theme.palette.primary.light,
	textDecoration:'none',
	listStyleType:'none',
	},
h1:{
	textAlign:'center',
	color:theme.palette.secondary.main,
	fontSize:'larger',
	},
h3:{
	padding:'2%',
	marginLeft:'2%',
	marginTop:'3%',
	marginBottom:'-4%',
	[theme.breakpoints.up('md')]: {
    	marginTop: '0%',
	},
	},
});

 let sCode = window.location.pathname;
 let newSC = sCode.split('/stateActivities/');
 newSC.shift();

const targetId = newSC;
const endpoint = `statecode=${targetId}`;

//Smart Component
class StateActivities extends React.Component {
	//declaring state and new object
	state ={
		activityListings:[],
		isLoading: false,
	} 

filterByActivity(current_value, i){
	for(let i=0; i< current_value.activities.length;i++ ) {
				let activity = current_value.activities[i];
					return true;
			}
			//console.log(current_value);
		return false;
}

activityClick(event) {
	window.onclick= event => {
				//event.preventDefault();
		console.log("tab");
		//console.log(event.target);
		
		//var activityId = event.target.id;
		//window.location.assign(`https://jenplaza.github.io/parks2go/stateParks/${targetId}/${activityId}`);
	};
}

helperFunction(_allActivities){
	let clean=[];
	for(let j = 0; j < _allActivities.length; j++){
		let match = false;
		for(let i = 0 ; i < clean.length ; i++){
			if(_allActivities[j].id === clean[i].id)
				{
					match = true;
					
					//testing
					//console.log("Match",_allActivities[j]);
				}
		}
		if(!match ) clean.push(_allActivities[j])
	}
	return clean.sort((a,b)=>a.name<b.name?-1:1);
}

//calling fetchData function
	componentDidMount(){
		this.fetchActivities();
}

//fetching API
fetchActivities(){
    const  {classes}  = this.props;
	this.setState({ isLoading: true }, () => {
		
			
fetch(`https://developer.nps.gov/api/v1/parks?${endpoint}&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq`)
		.then(results =>{
		return results.json();
	}).then(data =>{this.setState({
				isLoading:false,
				data:data.data
			})
	
		let filteredArray = data.data.filter(this.filterByActivity);
		let allActivities = [];
		let mList = filteredArray.map((use, i)=>{

			return(
				<Link key={i}>
				{use.activities.map(activity =>{
				allActivities.push(activity)
					return(
					<li key={activity.id} id={activity.id} className={classes.li} onClick={this.activityClick}>{activity.name}</li>	
						)})}
				</Link>
			)
		})
	
		let cleanActivities = this.helperFunction(allActivities)
		
		this.setState({activityListings:cleanActivities,StateActivities:mList})
		})
	})
}
	 render() { 
		 const { isLoading } = this.state; 
		 const { classes } = this.props;
		 
		 if(isLoading)
		 {return <Inprogress />}
		 
  return (
<Grid container>
	  	  <Grid item xs={12}>
	  		<h1 className={classes.h1}>{targetId} State National Parks</h1>
	  	</Grid> 
		<Grid item xs={12}>
	  		<ParkGridStateActivities />
		</Grid>
	  <Grid item xs={12} className={classes.h3}>
	  		<h3> Filter parks by activity</h3>
		</Grid>
	  	<Grid item xs={12} className={classes.container}>
	  	  		<div>
	  				<ul className={classes.ul}>
	  					{this.state.activityListings.map((v,i)=><li key={i} name={v.name} id={v.id} className={classes.li} onClick={this.activityClick}>{v.name}</li>)}
	  				</ul>
	   			</div>
	  		</Grid> 
		</Grid> 
  		);
	 }
}
export default withStyles(styles)(StateActivities);

