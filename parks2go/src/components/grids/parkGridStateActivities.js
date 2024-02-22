// JavaScript Document
import React from 'react';
import Inprogress from '../progress_indicator/inProgress'

//Material UI
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

 let sCode = window.location.pathname;
 let newSC = sCode.split('/stateActivities/');
 newSC.shift();

const targetId = newSC;
const endpoint = `statecode=${targetId}&limit=2`;


//Smart Component
class ParkGridStateActivities extends React.Component {
	//declaring state and new object
	state ={
		parkArray: [],
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
	 render() { 
		 const { data, isLoading } = this.state; 
		 	//console.log(isLoading)//testing:true
			
		 if(isLoading){
            return <Inprogress />
          }
			
			let newArray = data;
			 /*console.log(newArray)*///testing: newArray = data
			 
			if (newArray != null) {
        		return (
            		 <GridList cellHeight={450} >
                		{newArray.map((use, i) =>
							<GridListTile key={i} cols={1} >
								<img key={use.images[0].id} id={use.parkCode} src={use.images[0].url} alt={use.images[0].altText}  onClick={this.parkClick}/>
								<GridListTileBar title={use.images[0].title} subtitle={<span>{use.addresses[0].city}, {use.addresses[0].stateCode}</span>} />
					
							</GridListTile>	
							)}
            		</GridList>
        		);
    		}
  		return (
 				<div>
	  				{this.state.ParkGridStateActivities}	
    			</div>
  				);
 			}
		}
		export default ParkGridStateActivities