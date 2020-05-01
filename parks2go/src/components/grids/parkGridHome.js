// JavaScript Document
import React from 'react';

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
	margin:'1%',
	},
container:{
    display: 'flex',
	 flexWrap: 'wrap',
	justifyContent: 'space-around',
	overflow: 'hidden',
	},
gridList: {
	padding:'0.4%',
  },
paper: { 
    textAlign: 'center',
		width:'400px',
		height: '300px',
		listStyleType:'none',
		backgroundColor:'white',
  },
indImgs:{
	height: '100%',
	width:'100%',
	},
};

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
		window.location.assign(`http://localhost:3000/park/${parkId}`);
	};
} 

//calling fetchData function
	componentDidMount(){
	this.fetchData();
}

//fetching API
 fetchData(props){
	  
	fetch(`https://developer.nps.gov/api/v1/parks?${endpoint}&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq`)
		.then(results =>{
		return results.json();
	}).then(data =>{
		
		let mList = data.data.map((use, i)=>{
			const  {classes}  = this.props;
			return(
				<Grid container style={styles.container}>
				<GridList key={i} style={styles.gridList}>
				<GridListTile style={styles.paper} >
					<img id={use.parkCode} src={use.images[0].url} alt={use.images[0].altText} style={styles.indImgs} onClick={this.parkClick} />
				<GridListTileBar title={use.images[0].title} subtitle={<span>{use.addresses[0].city}, {use.addresses[0].stateCode}</span>} />
				</GridListTile>	
				</GridList>
				</Grid>
			)
		})
		
		this.setState({ParkGridHome:mList});
	})
}
	 render(props) { 
		const  {classes}  = this.props;
  return (

      <div style={styles.root}>
				
	  		{this.state.ParkGridHome}	
     
    
				</div>
  );
 }
}
export default ParkGridHome
//export default withStyles(useStyles)(ParkGridHome);

const styles ={
root:{
	direction:'row',
	flexGrow:'1',
	margin:'1%',
	},
container:{
    display: 'flex',
	 flexWrap: 'wrap',
	justifyContent: 'space-around',
	overflow: 'hidden',
	},
gridList: {
	padding:'0.4%',
  },
paper: { 
    textAlign: 'center',
		width:'400px',
		height: '300px',
		listStyleType:'none',
		backgroundColor:'white',
  },
indImgs:{
	height: '100%',
	width:'100%',
	},
}

