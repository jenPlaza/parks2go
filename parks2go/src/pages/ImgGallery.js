// JavaScript Document
import React from 'react';
import ImageGallery from 'react-image-gallery';
import Grid from "@material-ui/core/Grid";

const id ='bepa';
const endpoint = `parkCode=${id}`;

//Smart Component
class ImgGallery extends React.Component {
	//declaring state and new object
	state ={
		imgListing: [],
		imageArray: []
	}

	//calling fetchData function
	componentDidMount(){
	this.fetchData();
	}

	//fetch Api data and map json results in a list format
	fetchData(){
		// const urlArray=[];
		const apiImages = [...this.state.imageArray];
		
		fetch(`https://developer.nps.gov/api/v1/parks?${endpoint}&api_key=YpbDDtsNwQRi13JXZXiN7DnEIusWnKQLsCZW11xq`)
			.then(results =>{
			return results.json();
		}
		).then(data =>{
		
			// Loop over possible but unlikely array of parks.
			// (Hopefully query only returned one.)
			data.data.forEach((use, i)=>{
				// Looping over image array and generating data transfer object
				// As required by the ImageGallery component.
				use.images.forEach(p => {
					apiImages.push({original:p.url+'?w=500&h=300',thumbnail:p.url+'?w=150&h=50'})
				})
			})
		})
		this.setState({imageArray:apiImages});
	}

	render(){
		return(
			<ImageGallery items={this.state.imageArray} />
		)
	}

}


export default ImgGallery

const styles ={
	container:{

	},
	imgs:{
		border:'1px solid red',
		height:'auto',
	}
}
	