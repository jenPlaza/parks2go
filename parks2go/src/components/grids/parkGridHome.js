// JavaScript Document
import React from 'react';

//Material UI
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Inprogress from '../progress_indicator/inProgress'

const endpoint = 'limit=3';

//Smart Component
class ParkGridHome extends React.Component {
	//declaring state and new object
	state ={
		imageListing: []
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

//fetching API
fetchData(){
			this.setState({ isLoading: true }, () => {
				fetch(`https://developer.nps.gov/api/v1/parks?	${endpoint}&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq`)
				.then(results =>{
				return results.json();
				}).then(data => {this.setState({
				isLoading:false,
				data:data.data
			})
		})
	})
}

 render(){
		 const { data, isLoading } = this.state; 
		 
		 	/*//testing
		 	console.log(isLoading)*/
			
		 if(isLoading){
            return <Inprogress />
          }
			
			let newArray = data;
			 /*//testing
			 console.log(newArray)*/
			 
			if (newArray != null) {
        		return (
				<Grid container  >
					{newArray.map((use, i) =>
				<GridList key={i} cellHeight={325} style={styles.gridList}>
				<GridListTile cols={2} >
					<img id={use.parkCode} src={use.images[0].url} alt={use.images[0].altText} onClick={this.parkClick} />
				<GridListTileBar title={use.images[0].title} subtitle={<span>{use.addresses[0].city}, {use.addresses[0].stateCode}</span>} />
				</GridListTile>	
				</GridList>
					)}
            		</Grid>
        		)}
    		
  		return (
 				<div>
	  				{this.state.ParkGridHome}	
    			</div>
  				);
 			}
		}
export default ParkGridHome;
const styles ={
	gridList:{
		paddingBottom:'0.5%',
	},
};